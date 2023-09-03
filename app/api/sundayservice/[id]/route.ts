import Connect from '@/lib/mongodb/connect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export interface IEquipment {
  params: { id: string };
}

export async function GET(request: Request, { params }: IEquipment) {
  const { id } = params;

  const collection = await Connect('sundayservice');
  const response = await collection.findOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json(response, { status: 200 });
}
