import SundayServiceCard from '@/components/card/sundayservice/SundayServiceCard';
import { SundayService } from '@/types/sundayservice/base';

export interface ISundayServiceList {
  data: SundayService[];
}

const SundayServiceList: React.FC<ISundayServiceList> = ({ data }) => {
  return (
    <div className="CARDS flex flex-col mt-4 gap-2">
      {data.map((item: any) => {
        return <SundayServiceCard key={item._id} item={item} />;
      })}
    </div>
  );
};

export default SundayServiceList;
