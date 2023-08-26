import { ISignOutButton } from './SignOutButton';

const base: ISignOutButton = {
  primary: true,
  size: 'text-sm',
  label: 'Button',
  style: 'text-black',
  onClick: () => alert('Hello'),
};

export const mockSignOutButtonProps = {
  base,
};
