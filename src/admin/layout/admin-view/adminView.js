import React from "react";
import { AppContextProvider } from "../../../context";
import { AdminDashboard } from "../../components/dashboard";
import { AdminNavBar } from "../admin-navbar";

export const AdminView = () => {
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
