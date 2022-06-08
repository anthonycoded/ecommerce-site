import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useAuth from "./utils/authFunctions";
import MainWrapper from "./components/layout/MainWrapper";
import ScrollIntoView from "./utils/ScrollIntoView";
import LoginPage from "./pages/landing/LoginPage";
//import Register from "./pages/register/Register";

const AppWrapper = () => {
  const dispatch = useDispatch();
  const { authed, timeout } = useAuth();

  function RequireAuth({ children }) {
    return authed === true ? children : <Navigate to="/" replace />;
  }

  return (
    <ScrollIntoView>
      <div className={`h-screen w-full  overflow-hidden bg-faded-gray`}>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          {/* <Route exact path="/register" element={<Register />} /> */}

          <Route
            path="/home/*"
            element={
              //<RequireAuth>
              <MainWrapper />
              //</RequireAuth>
            }
          ></Route>
        </Routes>
        {/* 
        <TimeoutModal
          showModal={showModal}
          closeModal={closeModal}
        ></TimeoutModal> */}
      </div>
    </ScrollIntoView>
  );
};

export default AppWrapper;
