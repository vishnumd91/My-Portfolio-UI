import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAdminContext } from "../context";

export const ProtectedRoutes = () => {
  const { isLoggedIn } = useAdminContext();
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/admin" />}</>;
};

export default ProtectedRoutes;
