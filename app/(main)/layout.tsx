import BaseIcon from '@/components/icons/base/BaseIcon';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Providers from '../providers';

const LazySidebar = dynamic(
  () => import('./../../components/navigation/sidebar/Sidebar'),
  {
    loading: () => (
      <div className="flex-none items-center z-50 min-h-screen xl:w-64 lg:w-64 w-14 ">
        <div className="flex flex-col h-full gap-y-4 px-3 overflow-y-auto ">
          <div className="flex ml-1 mt-5 items-center duration-200">
            <BaseIcon icon="logo" style="w-6 h-6 text-primary-600" />
            <Image
              src="/mauritiusmedia.png"
              width={150}
              height={150}
              alt="Logo MauritiusMedia"
              className="ml-2 lg:block hidden"
            />
          </div>
        </div>
      </div>
    ),
  }
);

const LazyHeader = dynamic(
  () => import('./../../components/navigation/header/Header'),
  {
    loading: () => (
      <div className="absolute h-14 top-0 left-1/2 transform -translate-x-1/2 w-full z-20 py-4 " />
    ),
  }
);

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col ">
      <div className="flex flex-row">
        <LazySidebar />
        <div className="relative flex-col min-w-screen w-full">
          <LazyHeader />
          <div className="mx-auto flex max-w-7xl align-middle items-center justify-between px-4 mt-16 ">
            <Providers>{children}</Providers>
          </div>
        </div>
      </div>
    </div>
  );
}
