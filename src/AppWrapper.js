import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/landing/LoginPage";
import Register from "./pages/register/Register";

import ScrollToTop from "./utils/utils";
import { GetRefreshToken } from "./store/actions/authActions";
import AdminWrapper from "./AdminWrapper";

const AppWrapper = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    dispatch(GetRefreshToken());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header className="display-block"></Header>

      <div className="pt-12">
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />}></Route>
            {/* ////////////////////////////Auth Pages //////////////////////////////////*/}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* ////////////////////////////Admin Pages //////////////////////////////////*/}
            <Route
              path="admin/*"
              element={<AdminWrapper></AdminWrapper>}
            ></Route>
          </Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AppWrapper;
