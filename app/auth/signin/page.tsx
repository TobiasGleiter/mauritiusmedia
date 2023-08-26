import SignInButton from '@/components/button/signin/SignInButton';
import SpinnerLoading from '@/components/loading/spinner/SpinnerLoading';
import Image from 'next/image';
import { Suspense } from 'react';

let providers = [{}];
// TEMPORARY, replace with next-auth providers
// The providers can also be fetched from nextauth
if (process.env.NODE_ENV === 'development') {
  providers = [{ label: 'GitHub', provider: 'github', icon: 'github' }];
} else {
  providers = [{ label: 'Google', provider: 'google', icon: 'google' }];
}

export default function SignInPage() {
  return (
    <div className="relative w-full max-w-xs rounded-xl bg-black p-2">
      <div className="flex flex-col items-center text-neutral-400">
        <Image
          src="/mauritiusmedia.png"
          width={200}
          height={18}
          alt="Logo MauritiusMedia"
          className=" mb-4"
        />
        <h1 className="w-full mb-2 text-center ">Signin /w</h1>
        <div className="mb-2">
          {/** React Suspense along with a fallback aids in promptly displaying the Login page. */}
          <Suspense fallback={<SpinnerLoading />}>
            {/** Incorporate additional providers, ensuring that the Icon is included within BaseIcon(). */}
            {providers.map((provider: any) => {
              return (
                <SignInButton
                  key={provider.label}
                  label={provider.label}
                  provider={provider.provider}
                  icon={provider.icon}
                />
              );
            })}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
