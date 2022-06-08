import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import SideBar from "../navs/Home/sideBar/SideBar";
import NavBar from "./NavBar";

import HomePage from "../../pages/home/HomePage";

function MainWrapper({ ...rest }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //const accounts = useSelector((state) => state.accounts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //   useEffect(() => {
  //     if (!accounts.accounts[0]) {
  //       dispatch(GetAccounts());
  //       dispatch(GetOrder());
  //     }
  //     dispatch(GetNameAndProfilePic());
  //   }, []);

  //   useEffect(() => {
  //     if (accounts.status == 302) {
  //       navigate("/", { replace: true });
  //     }
  //   }, [accounts]);

  return (
    <div className={`lg:grid lg:grid-cols-11 lg:top-0  flex h-full w-full`}>
      <div className="xl:col-span-2 lg:col-span-3">
        {/* <SideBar open={mobileOpen} handleDrawerToggle={handleDrawerToggle} /> */}
      </div>

      <div className="xl:col-span-9 lg:col-span-8 lg:float-right h-full w-full lg:py-4 lg:px-4 relative">
        <div className="flex flex-col w-full  justify-between lg:rounded-xl  h-full overflow-hidden">
          <NavBar className="" handleDrawerToggle={handleDrawerToggle} />

          <div className="pt-12 md:pt-16 w-full h-full items-center top-16 z-20">
            <Routes>
              <Route index element={<HomePage />} exact />

              {/*             
              <Route path="/edit-account" element={<EditAccount />}>
                <Route path=":id" element={<EditAccount />}></Route>
              </Route> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainWrapper;
