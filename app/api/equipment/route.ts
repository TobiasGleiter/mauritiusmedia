import Connect from '@/lib/mongodb/connect';
import { hasRequiredPermissions } from '@/lib/rbac/base';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { authOptions } from '../auth/[...nextauth]/options';

const equipment = z.object({
  name: z.string(),
  category: z.string(),
  location: z.string(),
});

export async function GET() {
  const collection = await Connect('equipment');
  const response = await collection.find().toArray();

  return NextResponse.json(response);
}
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const role = session?.user ? session.user.role : 'guest';

  if (!hasRequiredPermissions(role, ['admin', 'technician', 'dev'])) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const validation = equipment.safeParse(body);

  if (!validation.success) {
    const { errors } = validation.error;

    return NextResponse.json(
      { message: 'Invalid request', errors },
      { status: 400 }
    );
  }

  const { name, category, location, color, description, count } = body;
  const collection = await Connect('equipment');
  const response = await collection.insertOne({
    name,
    count,
    category,
    location,
    color,
    description,
  });

  return NextResponse.json({ response }, { status: 201 });
}
