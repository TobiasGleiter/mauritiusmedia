import { ImArrowDown2, ImArrowUpRight2, ImSpinner9 } from 'react-icons/im';
import { SiGithub, SiGoogle, SiNextdotjs } from 'react-icons/si';

const ICONS_MAP: any = {
  nextjs: <SiNextdotjs />,
  github: <SiGithub />,
  google: <SiGoogle />,
  spinner: <ImSpinner9 />,
  arrowdown: <ImArrowDown2 />,
  arrowrightup: <ImArrowUpRight2 />,
};

export interface IBaseIcon {
  icon: string;
  style?: string;
}

const BaseIcon: React.FC<IBaseIcon> = ({ icon, style }) => {
  let IconComponent = ICONS_MAP[icon].type;

  return <IconComponent className={style} />;
};

export default BaseIcon;
