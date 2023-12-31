import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ProviderWrapper from '@/store/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brain Agriculture',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ProviderWrapper>
          <ToastContainer />
          {children}
        </ProviderWrapper>
      </body>
    </html>
  );
}
