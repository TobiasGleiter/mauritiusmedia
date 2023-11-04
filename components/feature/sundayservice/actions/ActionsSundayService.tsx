import { hasRequiredPermissionsClient, useRole } from '@/lib/rbac/base';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export interface IActionsSundayService {
  openModal: any;
}

const requiredPermissions = ['admin'];

const ActionsSundayService: React.FC<IActionsSundayService> = ({
  openModal,
}) => {
  const { data: session } = useSession();
  const role = useRole(session);

  return (
    <div className="ACTIONS">
      <h1 className="text-3xl font-bold">Actions</h1>
      <div className="flex lg:flex-row md:flex-row flex-col mt-2 gap-1">
        <button
          onClick={openModal}
          className="bg-white text-left py-1 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500"
        >
          <h2 className="text-2xl antialiased">Search</h2>
          <p className="text-secondary-700 antialiased">in Sunday Service</p>
        </button>
        {hasRequiredPermissionsClient(role as string, requiredPermissions) && (
          <Link
            href="/sunday-service/create"
            className="bg-white py-1 px-4 rounded-2xl shadow-md lg:w-64 md:w-64 w-full border border-white hover:border-primary-500"
          >
            <h2 className="text-2xl antialiased">Create</h2>
            <p className="text-secondary-700 antialiased">new Sunday Service</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ActionsSundayService;
