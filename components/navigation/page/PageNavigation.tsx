import BaseIcon from '@/components/icons/base/BaseIcon';
import Link from 'next/link';

export interface IPageNavigation {
  link: string;
}

const PageNavigation: React.FC<IPageNavigation> = ({ link }) => {
  return (
    <Link
      href={link}
      className="BACK flex items-center text-secondary-500 group"
    >
      <BaseIcon
        icon="arrowback"
        style="group-hover:text-secondary-800 duration-200"
      />
      <p className=" group-hover:text-secondary-800 duration-200">Back</p>
    </Link>
  );
};

export default PageNavigation;
