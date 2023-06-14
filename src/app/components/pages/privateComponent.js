import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateComponent = () => {
  const auth = localStorage.getItem("Adminuser");
  return auth ? <Outlet /> : <Navigate to="/user/dashboard" />;
};
export default PrivateComponent;
