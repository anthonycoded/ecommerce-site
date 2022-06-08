import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faBuildingColumns,
  faCircle,
  faLocationPin,
  faCogs,
  faUser,
  faList,
  faSignOut,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import BannerImage from "../BannerImage";

const NavBar = ({ handleDrawerToggle }) => {
  const profile = useSelector((state) => state.profile);
  const [showMenu, setShowMenu] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    setShowMenu(!showMenu);
    if (showInfo) {
      setShowInfo(false);
    }
  }

  function toggleInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <nav className="lg:relative flex flex-row items-center bg-white shadow-xl lg:rounded-t-xl lg:rounded-b-none w-full fixed z-30 top-0 h-12">
      <div className=" flex flex-row items-center justify-end  h-full w-full  ">
        <div className="lg:hidden px-4 w-full h-full">
          <button
            onClick={() => navigate("/home")}
            className="w-32 h-full object-contain flex justify-start items-center"
          >
            <BannerImage></BannerImage>
          </button>
        </div>
        <div className="w-full flex flex-row justify-end items-center content-center">
          <ul className="flex flex-row w-full items-center justify-end px-4 space-x-4 lg:px-14">
            <li>
              <a href="tel:8137965156" className="">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-primary-light text-2xl"
                ></FontAwesomeIcon>
              </a>
            </li>

            <li
              onClick={handleDrawerToggle}
              className="lg:hidden flex flex-row items-center justify-center "
            >
              <FontAwesomeIcon
                icon={faBars}
                className="text-primary-light text-3xl"
              ></FontAwesomeIcon>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
