import Connect from '@/lib/mongodb/connect';
import { NextResponse } from 'next/server';

export async function GET() {
  // equipment
  const equipment = await Connect('equipment');
  const countEquipment = await equipment.countDocuments();

  // sunday service
  const sundayservice = await Connect('sundayservice');
  const countSundayService = await sundayservice.countDocuments();

  const response = {
    equipment: {
      count: countEquipment,
    },
    sundayservice: {
      count: countSundayService,
    },
  };

  return NextResponse.json(response);
}
