import React from "react";
import bg from "../../../assets/bg.jpg";

const Collection = () => {
  return (
    <div className="h-4/5">
      <div
        className="bg-fixed h-full w-full flex flex-row items-end justify-end overflow-hidden pb-8"
        style={{
          backgroundImage: `url("${bg}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <button className="font-bold text-xl text-primary-main rounded-md py-2 px-4 bg-white bg-opacity-75">
          Summer Collection
        </button>
      </div>
    </div>
  );
};

export default Collection;
