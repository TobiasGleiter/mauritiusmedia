'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export interface IHeader {
  session: any;
}

const Header: React.FC<IHeader> = ({ session }) => {
  return (
    <div className="flex w-full items-center justify-between text-base">
      <Image
        src="/mauritiusmedia.png"
        width={200}
        height={18}
        alt="Logo MauritiusMedia"
      />
      <div>
        {session ? (
          <Link href="/auth/signout">Sign Out</Link>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Header;
