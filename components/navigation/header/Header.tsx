'use client';

import { usePathname, useRouter } from 'next/navigation';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const res = usePathname();
  const router = useRouter();
  const path = res.split('/');

  const handleRoute = () => {
    router.push(`/${path[1]}`);
  };

  return (
    <header className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-20 py-4 border-b border-zinc-900 text-secondary-600 bg-black">
      <nav className="mx-auto flex max-w-7xl align-middle items-center justify-between px-4 text">
        <div className="flex gap-1 antialiased font-semibold">
          <button
            onClick={handleRoute}
            className="hover:text-primary-600 duration-200"
          >
            {path[1][0].toUpperCase() + path[1].slice(1)}
          </button>
          <p>/</p>
          <p className="cursor-default">{path[2]}</p>
        </div>
        <div className="flex"></div>
      </nav>
    </header>
  );
};

export default Header;
