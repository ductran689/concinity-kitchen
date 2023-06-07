import { createContext, useContext } from 'react';
import { getAllPics } from '../prisma/admin';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
    /* whatever you want */
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
