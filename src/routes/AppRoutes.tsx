import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminView } from "../admin/layout/admin-view/adminView";
import { AdminLogin } from "../admin/components/login";
import { AppView } from "../web/layout";
import { PageNotFound } from "../common/page-not-found";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      {/* Web App Home Page Route */}
      <Route path="/" element={<AppView />} />
      {/* Admin Routes */}
      <Route path="admin/" element={<AdminLogin />} />
      {/* Admin Dashboard Route */}
      <Route path="dashboard" element={<AdminView />} />
      {/* Page Not Found Route */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
