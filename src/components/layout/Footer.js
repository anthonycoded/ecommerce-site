import React from "react";

const Footer = () => {
  return (
    <div className=" w-full h-96 p-8 flex flex-col items-center bg-primary-dark">
      <div className="grid grid-cols-2 gap-x-24 gap-y-4 text-2xl mb-12 justify-items-start text-white">
        <a href="/">Home</a>

        <a href="/store">Shop</a>
        <a href="/">Contact</a>

        <button href="/">About</button>
      </div>
      <p className="text-center text-xl text-white">&copy; Bumbaawt LLC 2020</p>

      <div className="flex flex-col justify-center items-center mt-8 p-4 bg-white rounded-xl shadow-lg h-full w-60">
        <p>
          This website was created by
          <br />
        </p>
        <button className="text-xl font-bold ml-1" style={{ color: "#aa00ff" }}>
          Nobel<span className="text-black text-2xl">X&trade;</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
