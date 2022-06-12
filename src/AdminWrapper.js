import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import useAuth, { AuthProvider } from "./utils/authFunctions";
import Dashboard from "./pages/admin/Dashboard";
import Store from "./pages/admin/store/Store";

const AdminWrapper = () => {
  //   function RequireAdmin({ children }) {
  //     const { authed, admin } = useAuth();

  //     return authed === true && admin === true ? (
  //       children
  //     ) : (
  //       <Navigate to="/login" replace />
  //     );
  //   }
  return (
    <Routes>
      <Route
        index
        element={
          //<RequireAdmin>
          <AdminPage />
          // </RequireAdmin>
        }
      ></Route>
      <Route
        path="/dashboard"
        element={
          //<RequireAdmin>
          <Dashboard />
          //</RequireAdmin>
        }
      />
      <Route
        path="/store"
        element={
          //<RequireAdmin>
          <Store />
          // </RequireAdmin>
        }
      />
      {/*
      <Route
        path="/beats"
        element={
          <RequireAdmin>
            <Beats />
          </RequireAdmin>
        }
      />
      <Route
        path="/customers"
        element={
          <RequireAdmin>
            <Customers />
          </RequireAdmin>
        }
      /> */}
    </Routes>
  );
};

export default AdminWrapper;
