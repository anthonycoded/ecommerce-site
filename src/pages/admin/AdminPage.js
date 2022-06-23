import React, { useState } from "react";
import { Link } from "react-router-dom";

import upload from "../../../assets/upload.png";
import dashboard from "../../../assets/dashboard.png";
import orders from "../../../assets/orders.png";
import store from "../../../assets/store.png";
import people from "../../../assets/users.png";

const AdminPage = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-col items-center p-2 pb-12 md:p-0 bg-gray-300">
        <p className="text-2xl  text-left w-full  lg:p-4">
          Welcome back admin.
        </p>
        <div className="w-full lg:px-24 h-96 lg:h-60 py-12 px-4 grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:justify-between ">
          <Link
            to="/admin/dashboard"
            className="w-full h-full flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:bg-primary bg-primary-light"
          >
            <img src={dashboard} alt="" className="w-12"></img>
            <p className="font-semibold text-lg">Dashboard</p>
          </Link>
          <Link
            to="/admin/store"
            className="w-full h-full flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:bg-primary bg-primary-light"
          >
            <img src={store} alt="" className="w-12"></img>
            <p className="font-semibold text-lg">Store</p>
          </Link>
          <Link
            to="/admin/orders"
            className="w-full h-full flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:bg-primary bg-primary-light"
          >
            <img src={orders} alt="" className="w-12"></img>
            <p className="font-semibold text-lg">Orders</p>
          </Link>
          <Link
            to="admin/customers"
            className="w-full h-full flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:bg-primary bg-primary-light"
          >
            <img src={people} alt="" className="w-12"></img>
            <p className="font-semibold text-lg">Customers</p>
          </Link>
        </div>
        <div className="h-110"></div>
      </div>
    </div>
  );
};

export default AdminPage;
