'use client';
import { HiMenuAlt1, HiX } from 'react-icons/hi';

import { Navbar } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';

import { useSidebarContext } from '@/context/SidebarContext';
import { isSmallScreen } from '@/utils';

export const Header = () => {
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();

  return (
    <header className='sm:hidden'>
      <Navbar
        fluid
        className='fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 sm:p-0'
      >
        <div className='w-full p-3 pr-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <button
                aria-controls='sidebar'
                aria-expanded
                className={twMerge(
                  'mr-2 cursor-pointer rounded p-2',
                  'text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100'
                )}
                onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
              >
                {isSidebarCollapsed || !isSmallScreen() ? (
                  <HiMenuAlt1 className='h-6 w-6' />
                ) : (
                  <HiX className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
};
