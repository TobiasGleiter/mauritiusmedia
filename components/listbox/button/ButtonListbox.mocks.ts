import { IButtonListbox } from './ButtonListbox';

const base: IButtonListbox = {
  title: 'Options',
  align: 'left-0',
  items: [
    {
      action: () => alert('action!'),
      label: 'Edit',
      icon: 'edit',
      active: 'bg-blue-400',
    },
    {
      action: () => alert('action!'),
      label: 'Delete',
      icon: 'delete',
      active: 'bg-red-400',
    },
    {
      action: () => alert('action!'),
      label: 'Achieve',
      icon: 'achieve',
      active: 'bg-green-400',
    },
  ],
};

export const mockButtonListboxProps = {
  base,
};
