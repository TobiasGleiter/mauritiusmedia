import { IBaseMenu } from './BaseMenu';

const base: IBaseMenu = {
  title: 'Account',
  align: 'left-0',
  links: [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ],
};

export const mockBaseMenuProps = {
  base,
};
