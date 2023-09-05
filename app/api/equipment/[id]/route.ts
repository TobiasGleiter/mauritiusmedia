import Connect from '@/lib/mongodb/connect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const idSchema = z.string();

export interface IEquipment {
  params: { id: string };
}

export async function GET(request: Request, { params }: IEquipment) {
  const { id } = params;

  // validation
  const validation = idSchema.safeParse(id);
  if (!validation.success) {
    const { errors } = validation.error;

    return NextResponse.json(
      { message: 'Invalid request', errors },
      { status: 400 }
    );
  }

  const collection = await Connect('equipment');
  const response = await collection.findOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json(response, { status: 200 });
}

export async function PUT(request: Request, { params }: IEquipment) {
  const { id } = params;

  // validation
  const validation = idSchema.safeParse(id);
  if (!validation.success) {
    const { errors } = validation.error;

    return NextResponse.json(
      { message: 'Invalid request', errors },
      { status: 400 }
    );
  }

  const { name, category, location, color } = await request.json();
  const collection = await Connect('equipment');
  const response = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        name,
        category,
        location,
        color,
      },
    }
  );

  return NextResponse.json({ response }, { status: 200 });
}

export async function DELETE(request: Request, { params }: IEquipment) {
  const { id } = params;

  // validation
  const validation = idSchema.safeParse(id);
  if (!validation.success) {
    const { errors } = validation.error;

    return NextResponse.json(
      { message: 'Invalid request', errors },
      { status: 400 }
    );
  }

  const collection = await Connect('equipment');
  const response = await collection.deleteOne({ _id: new ObjectId(id) });

  return NextResponse.json({ response }, { status: 200 });
}

// DELETING WITH PATCH (DELETE WORKS WITH POSTMAN BUT NOT IN NEXTJS)
export async function PATCH(request: Request, { params }: IEquipment) {
  const { id } = params;

  // validation
  const validation = idSchema.safeParse(id);
  if (!validation.success) {
    const { errors } = validation.error;

    return NextResponse.json(
      { message: 'Invalid request', errors },
      { status: 400 }
    );
  }

  const collection = await Connect('equipment');
  const response = await collection.deleteOne({ _id: new ObjectId(id) });

  return NextResponse.json({ response }, { status: 200 });
}
