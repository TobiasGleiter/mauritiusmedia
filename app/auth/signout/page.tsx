import SignOutButton from '@/components/button/signout/SignOutButton';
import SpinnerLoading from '@/components/loading/spinner/SpinnerLoading';
import Image from 'next/image';
import { Suspense } from 'react';

export default function SignOutPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="relative w-full max-w-xs rounded-xl bg-white p-2">
        <div className="flex flex-col items-center text-secondary-800">
          <Image
            src="/mauritiusmedia.png"
            width={200}
            height={18}
            alt="Logo MauritiusMedia"
            className=" mb-4"
          />
          <p className="mb-2">Are you sure you want to sign out?</p>
          <div className="mb-2">
            {/** React Suspense along with a fallback aids in promptly displaying the Signout page. */}
            <Suspense fallback={<SpinnerLoading />}>
              {/**  */}
              <SignOutButton label="Sign out" />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
