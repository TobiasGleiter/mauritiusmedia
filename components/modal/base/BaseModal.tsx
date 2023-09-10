import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export interface IBaseModal {
  title: string;
  description: string;
  closeModal: any;
  acceptModal: any;
  isOpen: any;
}

const BaseModal: React.FC<IBaseModal> = ({
  title,
  description,
  closeModal,
  acceptModal,
  isOpen,
}) => {
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

        <div className="fixed inset-0">
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
              <Dialog.Panel className="flex flex-col -translate-y-32 m-2 w-full max-w-xs min-w-max z-40 rounded-lg bg-white p-2 text-left align-middle">
                <Dialog.Title className="w-full text-lg">{title}</Dialog.Title>
                <Dialog.Description className="flex w-fit mt-2">
                  {description}
                </Dialog.Description>
                <div className="mt-2 space-x-1">
                  <button
                    onClick={acceptModal}
                    className=" px-2 border border-secondary-500 rounded-md hover:text-danger-500 hover:border-danger-500 duration-150"
                  >
                    Delete
                  </button>
                  <button
                    onClick={closeModal}
                    className=" px-2 border border-secondary-500 rounded-md hover:text-primary-500 hover:border-primary-500 duration-150"
                  >
                    Close Modal
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BaseModal;
