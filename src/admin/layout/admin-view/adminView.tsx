import React, { ReactElement } from "react";
import { AppContextProvider } from "../../../context";
import { AdminDashboard } from "../../components/dashboard";
import { AdminNavBar } from "../admin-navbar";

export const AdminView = (): ReactElement => {
  return (
    <>
      <AppContextProvider>
        <AdminNavBar />
        <AdminDashboard />
      </AppContextProvider>
    </>
  );
};

export default AdminView;
