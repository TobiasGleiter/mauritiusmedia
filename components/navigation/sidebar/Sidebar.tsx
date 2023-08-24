import Image from 'next/image';
import Link from 'next/link';

export interface ISidebar {}

const nav = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Equipment', href: '/equipment' },
];

const Sidebar: React.FC<ISidebar> = () => {
  return (
    <div className="flex min-h-screen border-r border-white/30 pr-24">
      <div className="realtive mt-6 bg-red-300">
        <Image
          src="/mauritiusmedia.png"
          width={150}
          height={150}
          alt="Logo MauritiusMedia"
          className="absolute"
        />
      </div>
      <nav className="mt-16">
        <ul className="flex flex-col">
          {nav.map((link) => {
            return (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
