import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full mt-0 mb-40">
      <div className="OVERVIEW">
        <h1 className="text-3xl font-bold">Overview</h1>
      </div>
      <div className="YOUR_PAGES mt-6">
        <h1 className="text-3xl font-bold">Your pages</h1>
        <div className="mt-2 grid grid-cols-3 gap-4">
          <Link
            href="/equipment"
            className="border border-secondary-900 border-dashed p-2 rounded-lg text-center duration-200 hover:border-primary-500"
          >
            Equipment
          </Link>
          <Link
            href="/sunday-service"
            className="border border-secondary-900 border-dashed p-2 rounded-lg text-center duration-200 hover:border-primary-500"
          >
            Sunday Service
          </Link>
        </div>
      </div>
    </div>
  );
}
