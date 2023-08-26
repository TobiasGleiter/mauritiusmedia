'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function AuthErrorPage() {
  const searchParams = useSearchParams();

  const error = searchParams.get('error');

  return (
    <div className="relative w-full max-w-xs rounded-xl bg-black">
      <div className="flex flex-col items-center text-white">
        <Image
          src="/mauritiusmedia.png"
          width={200}
          height={18}
          alt="Logo MauritiusMedia"
          className=" mb-4"
        />
        <p className="mb-2 text-center">
          An error occurred, please try again later.
        </p>
        <p className="text-red-600">{error && `Error: ${error}`}</p>
      </div>
    </div>
  );
}
