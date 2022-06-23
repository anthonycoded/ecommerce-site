import React, { useState, useEffect } from "react";
import { sizes, categories } from "../data";

const Colors = ({ payloadChange, payload, setPayload }) => {
  const [sizes, setSizes] = useState([
    { size: "xs", quantity: undefined },
    { size: "sm", quantity: undefined },
    { size: "md", quantity: undefined },
    { size: "lg", quantity: undefined },
    { size: "xl", quantity: undefined },
    { size: "2xl", quantity: undefined },
  ]);

  function handleChange(index, event) {
    let data = [...sizes];
    data[index][event.target.name] = event.target.value;
    setSizes(data);
  }

  useEffect(() => {
    setPayload({
      ...payload,
      sizes: sizes,
    });
  }, [sizes]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start px-4">
      <p className="mb-8">
        Please sizes and quantities available for this product
      </p>

      <div className="w-full h-full flex flex-wrap justify-between items-start">
        {sizes.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-start w-2/5 space-x-2 h-32"
            >
              <p className="w-1/3">{item.size}</p>
              <input
                //type={"number"}
                className="h-10 w-full px-2 rounded-md border-faded-light shadow-md"
                placeholder="Quantity"
                name="quantity"
                onChange={(event) => handleChange(index, event)}
              ></input>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
