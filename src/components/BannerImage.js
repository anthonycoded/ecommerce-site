import React from "react";
import logo from "../../assets/header.png";
//import logo from "../assets/worldwide.png";

const BannerImage = () => {
  return (
    <img
      src={logo}
      className="w-full object-cover flex h-full "
      alt="banner logo"
    />
  );
};

export default BannerImage;
