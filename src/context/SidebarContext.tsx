'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useContext, useState } from 'react';

interface SidebarContextProps {
  isCollapsed: boolean;
  setCollapsed: (isOpen: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
);

export const SidebarProvider: FC<PropsWithChildren> = function ({ children }) {
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        setCollapsed
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = (): SidebarContextProps =>
  useContext(SidebarContext);
