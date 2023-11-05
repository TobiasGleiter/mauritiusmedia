import { formatDateAndDisplayDayMonthYearHourMinute } from '@/helpers/sundayservice/date';
import { hasRequiredPermissions } from '@/lib/rbac/base';
import { Workflow } from '@/types/sundayservice/base';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { authOptions } from '../../auth/[...nextauth]/options';

// GET
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const role = session?.user ? session.user.role : 'guest';

  if (!hasRequiredPermissions(role, ['admin', 'technician'])) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const { data } = await request.json();

  const filename =
    data.name.replace(/[^\w\s]/gi, '').replace(/ /g, '_') + '.pdf';

  // Generate Workflow HTML
  const workflowHtml = data.workflow
    .map(
      (item: Workflow) => `
        <div class="workflow-item">
          <p>Name: ${item.name}</p>
          <p>Team: ${item.team}</p>
        </div>
        `
    )
    .join('');

  const content = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        .workflow-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dashed #4a5568;
          padding: 2px 0;
        }
      </style>
    </head>
    <body>
      <div class="DETAILS CARD">
        <h1>Details Sunday Service</h1>
        <p class="text-secondary-600">Name: ${data.name}</p>
        <p>Date: ${formatDateAndDisplayDayMonthYearHourMinute(data.date)}</p>
        <p>Location: ${data.location}</p>
        <p>Description: ${data.description}</p>
        <h2>Workflow</h2>
        ${workflowHtml}
      </div>
    </body>
    </html>
  `;

  // ...

  await page.setContent(content);
  const pdf = await page.pdf({ path: `temp/${filename}`, format: 'A4' });

  await browser.close();

  return new NextResponse(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'content-disposition': `attachment; filename="${filename}"`,
    },
  });
}
