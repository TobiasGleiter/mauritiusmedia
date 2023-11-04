import { ISundayServiceCard } from './SundayServiceCard';

const base: ISundayServiceCard = {
  item: {
    _id: 'id',
    name: 'name',
    description: 'description',
    location: 'location',
    date: 'date;',
    workflow: [{ name: 'name', team: 'team' }],
  },
};

export const mockSundayServiceCardProps = {
  base,
};
