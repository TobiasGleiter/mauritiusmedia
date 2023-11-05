import getUsers from '@/lib/users/getUsers';

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="USERS mt-4 py-4 px-4 rounded-2xl shadow-md bg-white min-h-screen w-full">
      <h1 className="text-3xl font-bold">Users</h1>
      <div className="CARDS flex flex-col mt-4 gap-2">
        {users.map((item: any) => {
          return (
            <div
              key={item._id}
              className="flex flex-col pb-2 shadow-md border border-secondary-800/10 rounded-2xl px-4 pt-3"
            >
              <div className="flex gap-1 text-secondary-800">
                <p className="text-black font-bold">{item.name}</p> as
                <p className="text-black">{item.role}</p>
              </div>
              <p className="text-black">{item.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
