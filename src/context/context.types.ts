import { Dispatch, ReactNode } from "react";

export type AppContextType = {
  open: boolean;
  setOpen: Dispatch<boolean>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<boolean>;
};

export type ChildrenType = {
  children: ReactNode;
};
