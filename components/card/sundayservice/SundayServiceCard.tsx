import { convertDate } from '@/helpers/sundayservice/date';
import { SundayService } from '@/types/sundayservice/base';
import Link from 'next/link';

export interface ISundayServiceCard {
  item: SundayService;
}

const SundayServiceCard: React.FC<ISundayServiceCard> = ({ item }) => {
  return (
    <Link
      href={`/sunday-service/details/${item._id}`}
      className="flex flex-col shadow-md border border-secondary-800/10 rounded-2xl px-4 pt-3"
    >
      <h2 className="text-xl antialiased font-medium">{item.name}</h2>
      <p className="text-lg text-secondary-600 antialiased font-medium">
        {convertDate(item.date)}
      </p>
      <div className="flex text-lg text-secondary-600 text-center align-middle">
        <p className="antialiased font-medium">{item.location}</p>
      </div>
    </Link>
  );
};

export default SundayServiceCard;
