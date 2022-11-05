import { Dispatch, ReactNode } from "react";

export type AdminContextType = {
  open: boolean;
  setOpen: Dispatch<boolean>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<boolean>;
};

export type ChildrenType = {
  children: ReactNode;
};
