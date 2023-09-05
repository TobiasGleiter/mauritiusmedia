import { IBaseListbox } from './BaseListbox';

const base: IBaseListbox = {
  labels: ['Audio', 'Video', 'Stream', 'Licht'],
  value: { name: 'Audio', color: '' },
  setValue: () => {},
  buttonStyle: 'w-32 bg-zinc-900',
  optionStyle: ' bg-zinc-900',
};

export const mockBaseListboxProps = {
  base,
};
