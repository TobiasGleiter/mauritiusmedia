import Connect from '@/lib/mongodb/connect';
import { hasRequiredPermissions } from '@/lib/rbac/base';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { authOptions } from '../../auth/[...nextauth]/options';

const idSchema = z.string();

export interface IEquipment {
  params: { id: string };
}

export async function GET(request: Request, { params }: IEquipment) {
  const session = await getServerSession(authOptions);
  const role = session?.user ? session.user.role : 'guest';

  if (!hasRequiredPermissions(role, ['guest', 'admin', 'technician', 'dev'])) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

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

  const collection = await Connect('sundayservice');
  const response = await collection.findOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json(response, { status: 200 });
}

// update
export async function PUT(request: Request, { params }: IEquipment) {
  const session = await getServerSession(authOptions);
  const role = session?.user ? session.user.role : 'guest';

  if (!hasRequiredPermissions(role, ['admin', 'technician', 'dev'])) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

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

  const { name, description, location, date, workflow } = await request.json();
  const collection = await Connect('sundayservice');
  const response = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        name,
        description,
        location,
        date,
        workflow,
      },
    }
  );

  return NextResponse.json({ response }, { status: 200 });
}

export async function PATCH(request: Request, { params }: IEquipment) {
  const session = await getServerSession(authOptions);
  const role = session?.user ? session.user.role : 'guest';

  if (!hasRequiredPermissions(role, ['admin', 'technician', 'dev'])) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

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

  const collection = await Connect('sundayservice');
  const response = await collection.deleteOne({ _id: new ObjectId(id) });

  return NextResponse.json({ response }, { status: 200 });
}
