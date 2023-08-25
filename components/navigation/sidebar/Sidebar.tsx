'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface ISidebar {}

const nav = [
  { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
  { label: 'Equipment', href: '/equipment', icon: 'dashboard' },
];

const Sidebar: React.FC<ISidebar> = () => {
  let pathname = usePathname();

  return (
    <nav className="items-center z-50 min-h-screen xl:w-64 lg:w-64 sm:w-fit xs:w-fit body-font font-montserrat bg-white dark:bg-zinc-900 dark:text-white">
      <div className="h-full px-3 py-5 overflow-y-auto  dark:bg-black border-r border-black/20 dark:border-white/10">
        <Link
          href="/"
          className="flex mb-2 items-center p-1 text-base font-normal rounded-lg duration-200 dark:text-white "
        >
          <Image
            src="/mauritiusmedia.png"
            width={150}
            height={150}
            alt="Logo MauritiusMedia"
            className="absolute"
          />
        </Link>
        <ul className="space-y-2">
          {nav.map((item: any) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`flex items-center p-1 text-base font-normal rounded-lg duration-200 dark:text-white xs:hover: md:hover:text-white md:hover:bg-black md:dark:hover:bg-white md:dark:hover:text-black ${
                  pathname === item.href ? 'bg-white/10' : ''
                }`}
              >
                <span className=" ml-2 text-lg font-light lg:block sm:hidden xs:hidden ">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
