import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import BaseIcon from '@/components/icons/base/BaseIcon';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

const nav = [
  { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
  { label: 'Equipment', href: '/equipment', icon: 'equipment' },
  { label: 'Sunday Service', href: '/sunday-service', icon: 'sundayservice' },
];

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full mt-0 mb-40">
      <div className="OVERVIEW">
        <h1 className="text-3xl font-bold">Overview</h1>
      </div>
      <div className="YOUR_PAGES mt-6">
        <h1 className="text-3xl font-bold">Your pages</h1>
        <div className="mt-2 grid lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {nav.map((item) => {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="bg-white h-[66px] py-1 px-4 rounded-2xl shadow-md w-full border border-white hover:border-primary-500"
              >
                <BaseIcon icon={item.icon} />
                <p>{item.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
