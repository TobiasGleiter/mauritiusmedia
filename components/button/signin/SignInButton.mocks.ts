import { ISignInButton } from './SignInButton';

const base: ISignInButton = {
  primary: true,
  size: 'text-sm',
  label: 'Button',
  style: 'text-black',
  provider: 'github',
  icon: 'github',
};

export const mockSignInButtonProps = {
  base,
};
