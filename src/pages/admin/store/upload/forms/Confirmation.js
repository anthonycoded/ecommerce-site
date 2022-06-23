import React from "react";

const Confirmation = ({ payload }) => {
  return (
    <div className="p-4">
      <p className="text-primary-main font-semibold text-xl">
        Confirm Product Information
      </p>
      <div className="">
        <p>Title: {payload.title}</p>
        <p>Price: {payload.price}</p>
        <p>Description: {payload.description}</p>
        <p>Category: {payload.category}</p>
        <div className="flex">
          <p>Quantities: </p>
          <div className="">
            {payload.sizes.map((item) => {
              if (item.quantity) {
                return (
                  <div className="flex space-x-2">
                    <p>{item.size}: </p>
                    <p>{item.quantity}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-row items-center justify-start space-x-4">
        {payload.images.map((item, i) => {
          return (
            <img
              key={i}
              className="w-24 object-cover"
              src={`data:image/png;base64,${item}`}
            ></img>
          );
        })}
      </div>

      <div className=""></div>
    </div>
  );
};

export default Confirmation;
