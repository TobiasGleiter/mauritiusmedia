import Connect from '@/lib/mongodb/connect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export interface IEquipment {
  params: { id: string };
}

export async function GET(request: Request, { params }: IEquipment) {
  const { id } = params;

  const collection = await Connect('equipment');
  const response = await collection.findOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json(response, { status: 200 });
}

export async function DELETE(request: Request, { params }: IEquipment) {
  const { id } = params;

  console.log(id);

  const collection = await Connect('equipment');
  const response = await collection.deleteOne({ _id: new ObjectId(id) });

  return NextResponse.json({ response }, { status: 200 });
}

export async function PUT(request: Request, { params }: IEquipment) {
  const { id } = params;

  const { name, category, location } = await request.json();
  const collection = await Connect('equipment');
  const response = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        name,
        category,
        location,
      },
    }
  );

  return NextResponse.json({ response }, { status: 200 });
}
