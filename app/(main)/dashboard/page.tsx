import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import BaseIcon from '@/components/icons/base/BaseIcon';
import { getDashboardData } from '@/lib/dashboard/getDashboardData';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

const nav = [
  { label: 'Equipment', href: '/equipment', icon: 'equipment' },
  { label: 'Sunday Service', href: '/sunday-service', icon: 'sundayservice' },
  { label: 'Profile', href: '/profile', icon: 'profile' },
];

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  const { equipment, sundayservice } = await getDashboardData();

  return (
    <div className="w-full mt-0 mb-40">
      <div className="OVERVIEW">
        <h1 className="text-3xl font-bold">Overview</h1>
        <div className="mt-2 grid lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex bg-white h-[100px] justify-center items-center py-1 px-4 rounded-2xl shadow-md w-full border border-white hover:border-primary-500">
            <div className="flex flex-col items-center">
              <p className="text-secondary-800 text-base">Count Equipment</p>
              <p className="font-bold text-3xl">{equipment.count}</p>
            </div>
          </div>

          <div className="flex bg-white h-[100px] justify-center items-center py-1 px-4 rounded-2xl shadow-md w-full border border-white hover:border-primary-500">
            <div className="flex flex-col items-center">
              <p className="text-secondary-800 text-base">
                Count Sunday Service
              </p>
              <p className="font-bold text-3xl">{sundayservice.count}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="YOUR_PAGES mt-6">
        <h1 className="text-3xl font-bold">Your pages</h1>
        <div className="mt-2 grid lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {nav.map((item) => {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex bg-white h-[66px] justify-center items-center py-1 px-4 rounded-2xl shadow-md w-full border border-white hover:border-primary-500"
              >
                <div className="flex items-center">
                  <BaseIcon icon={item.icon} style="w-6 h-6" />
                  <p className="ml-2 text-xl">{item.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
