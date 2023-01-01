import { useContext } from 'react';
import { Popover, Switch } from '@headlessui/react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { AppContext } from '../context/AppContext';

const navigation = [{ name: 'GYIK', href: '#faq' }];

const Navbar = () => {
  const router = useRouter();
  const { isAmountHidden, setIsAmountHidden } = useContext(AppContext);

  return (
    <header className="fixed z-50 w-full bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Popover className="flex h-16 justify-between">
          <div className="flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="no-underline">
                <div className="logo text-2xl">🚀</div>
              </Link>
            </div>
            <nav
              aria-label="Global"
              className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4"
            >
              {navigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className={clsx(
                    'decoration-none px-3 py-2 text-sm font-medium no-underline',
                    router.pathname === item.href && 'text-purple-800'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end  px-2 lg:ml-6">
            <p className="px-3 py-2 text-sm font-medium text-gray-900">
              Összegek elrejtése
            </p>
            <Switch
              checked={isAmountHidden}
              onChange={setIsAmountHidden}
              className={clsx(
                isAmountHidden ? 'bg-indigo-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={clsx(
                  isAmountHidden ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>
        </Popover>
      </div>
    </header>
  );
};

export default Navbar;
