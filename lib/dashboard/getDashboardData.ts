import Connect from '../mongodb/connect';

export async function getDashboardData() {
  // equipment
  const equipment = await Connect('equipment');
  const countEquipment = await equipment.countDocuments();

  // sunday service
  const sundayservice = await Connect('sundayservice');
  const countSundayService = await sundayservice.countDocuments();

  // user
  const users = await Connect('users');
  const countUser = await users.countDocuments();

  const response = {
    equipment: {
      count: countEquipment,
    },
    sundayservice: {
      count: countSundayService,
    },
    users: {
      count: countUser,
    },
  };

  return response;
}
