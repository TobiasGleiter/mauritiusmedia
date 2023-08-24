import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col">
        <div className="flex w-full items-center justify-between text-base">
          <Image
            src="/mauritiusmedia.png"
            width={200}
            height={18}
            alt="Logo MauritiusMedia"
          />
          <div>
            <button>Login</button>
          </div>
        </div>
        <div className="flex w-full h-full items-center my-10">
          <div className="flex">So oder so, das Tool!</div>
        </div>
      </div>
    </main>
  );
}
