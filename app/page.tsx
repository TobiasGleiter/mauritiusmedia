import Header from '@/components/landing/header/Header';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col">
        <Header session={session} />
        <div className="flex w-full h-full items-center my-10">
          <div className="flex">So oder so, das Tool!</div>
        </div>
      </div>
    </main>
  );
}
