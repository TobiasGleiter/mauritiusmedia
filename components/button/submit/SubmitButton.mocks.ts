import { ISubmitButton } from './SubmitButton';

const base: ISubmitButton = {
  primary: true,
  size: 'text-sm',
  label: 'Button',
  style: 'text-black',
  onClick: () => alert('Hello'),
};

export const mockSubmitButtonProps = {
  base,
};
