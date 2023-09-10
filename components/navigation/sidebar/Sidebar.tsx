'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BaseIcon from '../../icons/base/BaseIcon';

export interface ISidebar {}

const nav = [
  { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
  { label: 'Equipment', href: '/equipment', icon: 'equipment' },
  { label: 'Sunday Service', href: '/sunday-service', icon: 'sundayservice' },
];

const Sidebar: React.FC<ISidebar> = () => {
  let pathname = usePathname();

  return (
    <nav className="flex-none items-center z-10 min-h-screen xl:w-64 lg:w-64 w-fit text-secondary-600 ">
      <div className="flex flex-col h-full gap-y-4 px-3 overflow-y-auto ">
        <Link href="/" className="flex ml-1 mt-5 items-center duration-200">
          <BaseIcon icon="logo" style="w-6 h-6 text-primary-600" />
          <Image
            src="/mauritiusmedia.png"
            width={150}
            height={150}
            alt="Logo MauritiusMedia"
            className="ml-2 lg:block hidden"
          />
        </Link>
        <div className=" pt-4">
          <p className="font-bold text-xs hidden lg:block">MENU</p>
          <ul className=" space-y-2 pt-1">
            {nav.map((item: any) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center p-1  rounded-lg duration-200 hover:text-primary-600 ${
                    pathname === item.href ? 'text-primary-600' : ''
                  }`}
                >
                  <BaseIcon icon={item.icon} style={`w-6 h-6`} />
                  <span className=" ml-2 text-md font-light lg:block hidden ">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4">
          <p className="font-bold text-xs hidden lg:block">GENERAL SETTINGS</p>
          <ul className="flex flex-col space-y-2 pt-1">
            <li>
              <Link
                href="/profile"
                className="flex items-center p-1  rounded-lg duration-200 hover:text-primary-600"
              >
                <BaseIcon icon="profile" style={`w-6 h-6`} />
                <span className=" ml-2 text-md font-light lg:block hidden ">
                  Profile
                </span>
              </Link>
            </li>
            <li>
              {' '}
              <Link
                href="/auth/signout"
                className="flex items-center p-1  rounded-lg duration-200 hover:text-primary-600"
              >
                <BaseIcon icon="signout" style={`w-6 h-6`} />
                <span className=" ml-2 text-md font-light lg:block hidden ">
                  Sign out
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
