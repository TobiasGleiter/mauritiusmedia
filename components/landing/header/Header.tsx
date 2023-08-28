'use client';

import { Dialog, Transition } from '@headlessui/react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';

export interface IHeader {
  session: any;
}

const navigation = [{ name: 'Home', href: '/', as: '/' }];
const intern = [
  { name: 'Dashboard', href: '/dashboard', as: '/dashboard' },
  { name: 'Equipment', href: '/equipment', as: '/equipment' },
];

const Header: React.FC<IHeader> = ({ session }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-screen z-20 py-5 lg:py-3">
      <nav className="mx-auto flex max-w-7xl align-middle items-center lg:justify-between px-4 lg:px-8">
        <div className="flex justify-between w-full lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          >
            <div>menu</div>
          </button>
        </div>
        <div className="align-middle">
          <Image
            src="/mauritiusmedia.png"
            width={200}
            height={18}
            alt="Logo MauritiusMedia"
          />
        </div>
        <div className="hidden lg:flex lg:gap-x-4 ">
          <ul className="lg:flex lg:gap-x-4 text-white py-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  as={item.as}
                  className=" hover:text-primary-600 duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {session &&
              intern.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    as={item.as}
                    className=" hover:text-primary-600 duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
          {session ? (
            <Link
              href="/auth/signout"
              className="rounded-full px-4 py-2 shadow-lg bg-white text-black lg:hover:bg-primary-600 lg:hover:text-white duration-300"
            >
              Sign out
            </Link>
          ) : (
            <button
              onClick={() => signIn()}
              className="rounded-full px-4 py-2 shadow-lg bg-white text-black lg:hover:bg-primary-600 lg:hover:text-white duration-300"
            >
              Sign in
            </button>
          )}
        </div>
      </nav>
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden z-30"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-20 bg-black opacity-60" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 -translate-x-20"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel className="fixed inset-y-0 left-0 z-30 w-full overflow-y-auto p-6 sm:max-w-sm text-white bg-black">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <p className="font-semibold text-xl">X</p>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6">
                  <div className="space-y-0 pb-4 border-b">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        as={item.as}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-semibold"
                      >
                        {item.name}
                      </Link>
                    ))}
                    {session &&
                      intern.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          as={item.as}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-base font-semibold"
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                  <div className="mt-4">
                    {session ? (
                      <Link
                        href="/auth/signout"
                        className="rounded-full px-4 py-2 shadow-lg bg-white text-black lg:hover:bg-primary-600 lg:hover:text-white duration-300"
                      >
                        Sign out
                      </Link>
                    ) : (
                      <button
                        onClick={() => signIn()}
                        className="rounded-full px-4 py-2 shadow-lg bg-white text-black lg:hover:bg-primary-600 lg:hover:text-white duration-300"
                      >
                        Sign in
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;
