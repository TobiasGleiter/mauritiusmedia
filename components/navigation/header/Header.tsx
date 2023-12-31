'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
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
    <header className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-20 py-4 text-secondary-600">
      <nav className="mx-auto flex max-w-7xl align-middle items-center justify-between px-4 text">
        <div className="flex antialiased items-center">
          <button
            onClick={handleRoute}
            className="hover:text-primary-600 duration-200"
          >
            {path[1][0].toUpperCase() + path[1].slice(1)}
          </button>
          <BaseIcon icon="chevronright" style="w-5 h-5 mt-0.5" />
          <p className="cursor-default">{path[2]}</p>
        </div>
        <div className="flex"></div>
      </nav>
    </header>
  );
};

export default Header;
