import React from "react";
import { sizes, categories } from "../data";

const Colors = ({ payloadChange }) => {
  const [numOfInputs, setNumOfInputs] = useState(0);
  const Form = () => (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-32">
        <label className="">Color:</label>
        <input
          key="Color"
          type="text"
          name="Color"
          className="bg-white shadow-md border-gray-300 rounded w-32"
          style={{ borderWidth: "1px" }}
          onChange={payloadChange}
          placeholder="0.00"
        ></input>
      </div>

      <div className="flex w-full items-center ">
        <p className="text-xl font-semibold w-1/3 text-left ">Sizes:</p>
        <select
          name="size"
          onChange={(e) => payloadChange(e)}
          value={payload.sizes}
          className="pl-2 sm:pl-4 shadow-md border-faded-gray rounded-md  h-12 w-3/5 self-end"
          style={{ borderWidth: "1px" }}
        >
          {sizes?.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="w-32">
        <label className="">Quantity:</label>
        <input
          key="quantity"
          type="text"
          name="quantity"
          className="bg-white shadow-md border-gray-300 rounded w-32"
          style={{ borderWidth: "1px" }}
          onChange={payloadChange}
          placeholder="0.00"
        ></input>
      </div>
    </div>
  );
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <p>Please add colors, sizes, and quantities available for this product</p>
      <div className=""></div>
    </div>
  );
};

export default Colors;
