'use client';

import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const res = usePathname();
  const router = useRouter();
  const path = res.split('/');

  const handleRoute = () => {
    router.push(`/${path[1]}`);
  };

  const session = useSession();

  return (
    <header className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-20 py-4 text-secondary-600">
      <nav className="mx-auto flex max-w-7xl align-middle items-center justify-between px-4 text">
        <div className="flex gap-1 antialiased">
          <button
            onClick={handleRoute}
            className="hover:text-primary-600 duration-200"
          >
            {path[1][0].toUpperCase() + path[1].slice(1)}
          </button>
          <p>/</p>
          <p className="cursor-default">{path[2]}</p>
        </div>
        <div className="flex">
          <p className="font-bold antialiased text-sm border  px-1">
            {session.data?.user.role.toUpperCase()}
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
