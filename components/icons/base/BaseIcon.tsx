'use client';
import {
  BiArrowBack,
  BiBible,
  BiCaretDown,
  BiCaretRight,
  BiCheck,
  BiCheckDouble,
  BiCheckbox,
  BiChevronRight,
  BiChurch,
  BiDotsHorizontalRounded,
  BiEdit,
  BiEditAlt,
  BiError,
  BiGridHorizontal,
  BiGroup,
  BiListPlus,
  BiListUl,
  BiLogIn,
  BiLogOut,
  BiPrinter,
  BiSearch,
  BiShare,
  BiTachometer,
  BiTrash,
  BiUser,
} from 'react-icons/bi';
import { ImArrowDown2, ImArrowUpRight2, ImSpinner9 } from 'react-icons/im';
import { SiGithub, SiGoogle, SiNextdotjs } from 'react-icons/si';

const ICONS_MAP: any = {
  nextjs: <SiNextdotjs />,
  github: <SiGithub />,
  google: <SiGoogle />,
  spinner: <ImSpinner9 />,
  arrowdown: <ImArrowDown2 />,
  arrowrightup: <ImArrowUpRight2 />,

  caretright: <BiCaretRight />,
  caretdown: <BiCaretDown />,

  arrowback: <BiArrowBack />,

  dotmenu: <BiDotsHorizontalRounded />,

  drag: <BiGridHorizontal />,

  search: <BiSearch />,

  chevronright: <BiChevronRight />,

  delete: <BiTrash />,
  edit: <BiEdit />,
  print: <BiPrinter />,
  share: <BiShare />,

  check: <BiCheck />,
  checkdouble: <BiCheckDouble />,
  edited: <BiEditAlt />,
  error: <BiError />,

  logo: <BiChurch />,
  dashboard: <BiTachometer />,
  equipment: <BiListUl />,
  newequipment: <BiListPlus />,
  sundayservice: <BiBible />,
  users: <BiGroup />,

  profile: <BiUser />,

  signin: <BiLogIn />,
  signout: <BiLogOut />,

  placeholder: <BiCheckbox />,
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
