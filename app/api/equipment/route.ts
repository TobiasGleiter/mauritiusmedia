import Connect from '@/lib/mongodb/connect';
import { NextResponse } from 'next/server';

export async function GET() {
  const collection = await Connect('equipment');
  const response = await collection.find().toArray();

  return NextResponse.json(response);
}
export async function POST(request: Request) {
  const { name, category, location } = await request.json();
  const collection = await Connect('equipment');
  const response = await collection.insertOne({ name, category, location });

  return NextResponse.json({ response }, { status: 201 });
}
