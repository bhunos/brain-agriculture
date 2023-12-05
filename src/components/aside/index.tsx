'use client';

import { HiChartPie, HiUser } from 'react-icons/hi';

import { Sidebar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import LogoIcon from '@/assets/images/logo.png';
import { useSidebarContext } from '@/context/SidebarContext';
import { RoutesPaths } from '@/types';

export const Aside = () => {
  const { isCollapsed } = useSidebarContext();

  return (
    <Sidebar
      aria-label='Sidebar with multi-level dropdown example'
      id='sidebar'
      className={twMerge(
        'fixed top-0 z-20 mt-16 duration-100 sm:left-0 sm:mt-0 sm:flex',
        'shrink-0 flex-col border-r border-gray-200',
        isCollapsed ? '-left-72' : 'left-0'
      )}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link
            className='mb-16 flex w-full flex-col items-center justify-center text-center font-bold'
            href={RoutesPaths.DASHBOARD}
          >
            <Image src={LogoIcon} alt='logo' width={100} priority />
            <h1 className='text-2xl'>Brain Agriculture</h1>
          </Link>

          <Sidebar.Item href={RoutesPaths.DASHBOARD} icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href={RoutesPaths.USERS} icon={HiUser}>
            Produtores Rurais
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
