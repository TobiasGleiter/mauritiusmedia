import { IEquipmentCard } from './EquipmentCard';

const base: IEquipmentCard = {
  _id: 'any',
  name: 'string',
  category: '',
  location: 'string',
  session: 'any',
  handleDelete: 'any',
};

export const mockEquipmentCardProps = {
  base,
};
