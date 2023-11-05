import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

// GET
export async function GET(req: NextRequest) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // HTML content you want to convert to PDF
  const content = `
        <h1>Hello World</h1>
        <p>This content will be printed to PDF.</p>
    `;

  await page.setContent(content);
  const pdf = await page.pdf({ format: 'A4' });

  await browser.close();

  const filename = 'download.pdf';

  return new NextResponse(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'content-disposition': `attachment; filename="${filename}"`,
    },
  });
}
