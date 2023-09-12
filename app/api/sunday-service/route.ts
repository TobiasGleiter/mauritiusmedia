import Connect from '@/lib/mongodb/connect';
import { hasRequiredPermissions } from '@/lib/rbac/base';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { authOptions } from '../auth/[...nextauth]/options';

const equipment = z.object({
  name: z.string(),
  date: z.string().datetime(),
  procedure: z
    .object({
      name: z.string(),
      team: z.string(),
    })
    .array()
    .optional(),
});

// GET
export async function GET() {
  const collection = await Connect('sundayservice');
  const response = await collection.find().toArray();

  return NextResponse.json(response);
}

// POST
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const role = session?.user ? session.user.role : 'guest';

  if (!hasRequiredPermissions(role, ['admin', 'technican', 'dev'])) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();

  const { name, description, location, date, workflow } = body;
  const collection = await Connect('sundayservice');
  const response = await collection.insertOne({
    name,
    description,
    location,
    date,
    workflow,
  });

  return NextResponse.json({ response }, { status: 201 });
}
