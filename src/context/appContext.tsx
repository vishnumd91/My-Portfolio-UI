import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import { AppContextType, ChildrenType } from "./context.types";

const AppContext = createContext<AppContextType>(null!);

export const AppContextProvider = ({
  children,
}: ChildrenType): ReactElement => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const context = {
    open,
    setOpen,
    isLoggedIn,
    setIsLoggedIn,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
