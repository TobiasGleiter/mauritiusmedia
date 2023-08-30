'use client';

import { usePathname } from 'next/navigation';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const res = usePathname();
  const path = res.split('/')[1];

  return (
    <header className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-20 py-4 border-b border-white/20">
      <nav className="mx-auto flex max-w-7xl align-middle items-center justify-between px-4">
        <div className="flex">{path[0].toUpperCase() + path.slice(1)}</div>
        <div className="flex"></div>
      </nav>
    </header>
  );
};

export default Header;
