import Header from '@/components/landing/header/Header';
import { getServerSession } from 'next-auth';

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <div className="relative ">
      <Header session={session} />
      <div className="max-w-2xl flex flex-col md:flex-row mx-4 lg:mx-auto mb-40">
        {children}
      </div>
    </div>
  );
}
