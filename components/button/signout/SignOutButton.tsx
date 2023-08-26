'use client';
import { signOut } from 'next-auth/react';

export interface ISignOutButton {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'text-sm' | 'text-base' | 'text-xl';
  /**
  /**
   * Button contents
   */
  label: string;
  /**
   * How large should the button be?
   */
  style?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const handleSignOut = async () => {
  await signOut({
    redirect: true,
    callbackUrl: '/',
  });
};

const SignOutButton: React.FC<ISignOutButton> = ({
  primary = false,
  size,
  style,
  label,
  ...props
}) => {
  return (
    <button
      className={`inline-flex rounded-full pl-6 pr-7 py-1 shadow-lg lg:hover:bg-green-600 lg:hover:text-black duration-300 ${
        primary ? 'bg-black text-white' : ' bg-white text-black '
      } ${style} ${size} justify-center items-center `}
      onClick={() => handleSignOut()}
      {...props}
    >
      {label}
    </button>
  );
};

export default SignOutButton;
