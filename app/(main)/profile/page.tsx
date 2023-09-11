import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-fit mt-0 mb-40">
      <div className="PROFILE mt-4 py-4 px-4 rounded-2xl shadow-md bg-white">
        <Image
          src={session?.user.image as string}
          alt="Rounded avatar"
          width={256}
          height={256}
          className="rounded-lg"
        />
        <div className="mt-2 space-y-4">
          <h1 className="text-3xl font-bold">My profile</h1>
          <div>
            <p className="antialiased text-base text-secondary-600">
              Name and Role
            </p>
            <p className="text-xl">
              {session?.user.name}{' '}
              <span className=" text-secondary-800">as</span>{' '}
              {session?.user.role}
            </p>
            <p className="antialiased text-base text-secondary-600">E-Mail</p>
            <p>{session?.user.email}</p>
          </div>
          <div>
            <p className="antialiased text-base text-secondary-600">
              Personal ID
            </p>
            <p>{session?.user.id as string}</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="w-64 border-b border-secondary-100" />
        </div>
      </div>
    </div>
  );
}
