import dynamic from 'next/dynamic';
import Providers from '../providers';

const LazySidebar = dynamic(
  () => import('./../../components/navigation/sidebar/Sidebar'),
  {
    loading: () => (
      <div className="flex-none items-center z-50 min-h-screen xl:w-64 lg:w-64 w-14 text-secondary-600 bg-zinc-900" />
    ),
  }
);

const LazyHeader = dynamic(
  () => import('./../../components/navigation/header/Header'),
  {
    loading: () => (
      <div className="absolute h-14 top-0 left-1/2 transform -translate-x-1/2 w-full z-20 py-4 border-b border-zinc-900 text-secondary-600 bg-black" />
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
