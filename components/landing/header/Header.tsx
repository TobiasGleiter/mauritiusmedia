'use client';

import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

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
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <button onClick={() => signIn()}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
