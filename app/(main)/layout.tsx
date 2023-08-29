import Header from '@/components/navigation/header/Header';
import Sidebar from '@/components/navigation/sidebar/Sidebar';
import Providers from '../providers';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col ">
      <div className="flex flex-row">
        <Sidebar />
        <div className="relative flex-col min-w-screen w-full">
          <Header />

          <div className="mx-auto flex max-w-7xl align-middle items-center justify-between px-4">
            <Providers>{children}</Providers>
          </div>
        </div>
      </div>
    </div>
  );
}
