import React, { useRef, useState } from "react";
import Menu from "./Menu";
import Drawer from "./Drawer";
import BannerImage from "../BannerImage";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(true);
  }

  return (
    <div className=" w-full flex flex-col fixed bg-white pr-4 pl-2">
      <div className="h-12 flex justify-between items-center ">
        <a className="w-32" href="/">
          <BannerImage></BannerImage>
        </a>
        <button
          className=""
          onClick={() => (open ? setOpen(false) : setOpen(true))}
        >
          <Menu></Menu>
        </button>
      </div>
      {open ? <Drawer open={open} setOpen={setOpen}></Drawer> : undefined}
    </div>
  );
};

export default Navbar;
