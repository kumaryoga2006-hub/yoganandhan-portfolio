import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface CursorContextType {
  cursorState: 'default' | 'hover' | 'active';
  setCursorState: (state: 'default' | 'hover' | 'active') => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'active'>('default');

  return (
    <CursorContext.Provider value={{ cursorState, setCursorState }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
