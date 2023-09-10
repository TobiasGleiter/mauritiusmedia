'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useState } from 'react';

export interface ISearchModal {
  data: any[];
  closeModal: any;
  isOpen: any;
}

const SearchModal: React.FC<ISearchModal> = ({ data, closeModal, isOpen }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const pathname = usePathname();

  const filteredResults = searchTerm
    ? data.filter((result: any) =>
        result.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed top-16 left-1/2 -translate-x-1/2 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full z-40 max-w-md transform overflow-hidden rounded-xl bg-white p-2 text-left align-middle transition-all">
                <div className="flex">
                  <BaseIcon icon="search" style="w-6 h-6 mt-1" />
                  <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    className="w-full focus: text-black rounded-none bg-transparent py-1 ml-2"
                    type="text"
                    placeholder="..."
                  />
                </div>
                {filteredResults && (
                  <>
                    <div className="mt-2 gap-2 flex flex-col">
                      {filteredResults.map((item) => {
                        return (
                          <Link
                            key={item._id}
                            href={`${pathname}/details/${item._id}`}
                            className="flex flex-row items-center w-full lg:hover:text-primary-500 duration-150 border-b border-secondary-500 border-dashed"
                          >
                            <BaseIcon icon="placeholder" style="w-6 h-6" />
                            <p className=" antialiased text-xl">{item.name}</p>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="flex justify-center mt-6">
                      <div className="w-64 border-b border-secondary-100" />
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SearchModal;
