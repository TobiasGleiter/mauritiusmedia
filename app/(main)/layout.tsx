import Header from '@/components/navigation/header/Header';
import Sidebar from '@/components/navigation/sidebar/Sidebar';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col ">
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col min-w-full">
          <Header />
          <div className="mx-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
