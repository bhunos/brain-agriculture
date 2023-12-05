'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { SidebarProvider } from '@/context/SidebarContext';
import { store } from '@/store/index';

export default function ProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <SidebarProvider>{children}</SidebarProvider>;
    </Provider>
  );
}
