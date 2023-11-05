import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import BaseIcon from '../../icons/base/BaseIcon';

export interface IButtonListbox {
  title: string;
  align: string;
  items: any[];
}

const ButtonListbox: React.FC<IButtonListbox> = ({ title, items, align }) => {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="items-center inline-flex w-full justify-center rounded-full bg-secondary-100 p-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <BaseIcon icon="dotmenu" style="w-6 h-6" />
        {title && <span className="ml-1 sm:block xs:hidden">{title}</span>}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute ${align} mt-2 w-36 origin-top-right divide-y z-20  bg-secondary-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          {items.map((item) => (
            <Menu.Item as="div" key={item.label} className="p-1">
              {({ active, disabled }) => (
                <button
                  onClick={() => item.action()}
                  className={`${
                    active ? `${item.active} text-zinc-800` : ''
                  } group flex w-full items-center rounded-lg px-2 py-2 text-base gap-2`}
                >
                  <BaseIcon icon={item.icon} style="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ButtonListbox;
