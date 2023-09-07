import Connect from '@/lib/mongodb/connect';
import { NextResponse } from 'next/server';
import { z } from 'zod';

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
  const body = await request.json();
  const validation = equipment.safeParse(body);

  if (!validation.success) {
    const { errors } = validation.error;

    return NextResponse.json(
      { message: 'Invalid request', errors },
      { status: 400 }
    );
  }

  const { name, category, location, color, description } = body;
  const collection = await Connect('equipment');
  const response = await collection.insertOne({
    name,
    category,
    location,
    color,
    description,
  });

  return NextResponse.json({ response }, { status: 201 });
}
