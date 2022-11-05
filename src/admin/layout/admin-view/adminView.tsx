import React, { ReactElement } from "react";
import { AdminDashboard } from "../../components/dashboard";
import { AdminNavBar } from "../admin-navbar";

export const AdminView = (): ReactElement => {
  return (
    <>
      <AdminNavBar />
      <AdminDashboard />
    </>
  );
};

export default AdminView;
