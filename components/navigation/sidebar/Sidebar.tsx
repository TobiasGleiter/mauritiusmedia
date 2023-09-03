'use client';
import BaseIcon from '@/components/icons/base/BaseIcon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface ISidebar {}

const nav = [
  { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
  { label: 'Equipment', href: '/equipment', icon: 'equipment' },
  { label: 'Sunday Service', href: '/sunday-service', icon: 'sundayservice' },
];

const Sidebar: React.FC<ISidebar> = () => {
  let pathname = usePathname();

  return (
    <nav className="flex-none items-center z-50 min-h-screen xl:w-64 lg:w-64 w-fit text-white bg-black">
      <div className="flex flex-col h-full divide-y divide-inherit gap-y-4 px-3 overflow-y-auto border-r border-white/20">
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
        <ul className=" space-y-2 pt-4">
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
        <ul className="flex flex-col pt-4 space-y-2">
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
    </nav>
  );
};

export default Sidebar;
