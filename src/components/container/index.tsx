import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

import { Aside } from '@/components';

import { Header } from '../header';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <main className={twMerge('mt-16 p-8', 'sm:ml-64 sm:mt-0')}>
        {children}
      </main>

      <Aside />
    </>
  );
};
