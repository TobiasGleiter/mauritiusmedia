import Connect from '../mongodb/connect';

export async function getDashboardData() {
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

  return response;
}
