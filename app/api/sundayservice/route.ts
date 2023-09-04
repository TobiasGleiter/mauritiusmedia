import Connect from '@/lib/mongodb/connect';
import { NextResponse } from 'next/server';
import { z } from 'zod';

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
  const body = await request.json();

  const { name, description, date, workflow } = body;
  const collection = await Connect('sundayservice');
  const response = await collection.insertOne({
    name,
    description,
    date,
    workflow,
  });

  return NextResponse.json({ response }, { status: 201 });
}
