import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import { AdminContextType, ChildrenType } from "./context.types";

const AdminContext = createContext<AdminContextType>(null!);

export const AdminContextProvider = ({
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
  return (
    <AdminContext.Provider value={context}>{children}</AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
