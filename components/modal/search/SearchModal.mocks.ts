import { ISearchModal } from './SearchModal';

const base: ISearchModal = {
  data: [
    { name: '1', location: '2' },
    { name: '3', location: '4' },
  ],
  closeModal: '',
  isOpen: '',
};

export const mockSearchModalProps = {
  base,
};
