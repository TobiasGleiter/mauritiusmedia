import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import BaseIcon from '@/components/icons/base/BaseIcon';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import Link from 'next/link';

export default async function NewUserPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="relative w-full max-w-xs rounded-xl p-2">
      <div className="flex flex-col items-center bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
        <Image
          src="/mauritiusmedia.png"
          width={200}
          height={18}
          alt="Logo MauritiusMedia"
          className=" mb-4"
        />
        <h1 className="w-full font-bold text-2xl mb-2 text-center ">
          Welcome{' '}
          <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
            {session?.user?.name}
          </span>
          !
        </h1>
        <p className="mb-2 text-center">
          This tool is currently under construction.
        </p>
        <Link
          href="/dashboard"
          className="group hover:text-green-600 duration-200 flex items-center justify-center"
        >
          <p>Go to dashboard</p>
          <BaseIcon
            icon="arrowrightup"
            style="ml-1 text-neutral-300 group-hover:text-green-400"
          />
        </Link>
      </div>
    </div>
  );
}
