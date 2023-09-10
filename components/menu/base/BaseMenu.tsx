import { Menu } from '@headlessui/react';
import Link from 'next/link';

export interface IBaseMenu {
  title: string;
  align: string;
  links: any[];
}

const BaseMenu: React.FC<IBaseMenu> = ({ title, links, align }) => {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="border border-black/20 hover:bg-black hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black duration-150 px-6 py-2 rounded-full">
        <span className="w-full text-center ">{title}</span>
      </Menu.Button>

      <Menu.Items
        className={`absolute ${align} mt-2 w-36 origin-top-right divide-y z-20 dark:divide-zinc-900 divide-white-100 text-black dark:text-white dark:bg-black bg-white rounded-lg border border-black/20 dark:border-white/20  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        {links.map((link) => (
          <Menu.Item
            as="div"
            key={link.href}
            className="p-1"
            onClick={link.action}
          >
            {({ active, disabled }) => (
              <Link
                href={link.href}
                className={`${
                  !disabled
                    ? active
                      ? 'bg-white text-black'
                      : ''
                    : ' text-danger-500 cursor-not-allowed'
                }
                          group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
              >
                <span>{link.label}</span>
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default BaseMenu;
