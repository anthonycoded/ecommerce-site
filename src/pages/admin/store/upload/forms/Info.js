import React, { useState, useEffect } from "react";
import { categories } from "../data";
import Images from "./components/Images";

const Info = ({
  payloadChange,
  setImageFile,
  setImage,
  payload,
  setPayload,
}) => {
  const [selectedImage, setSelectedImage] = useState();
  let array = [];
  const selectImage = (file) => {
    //setImageFile(URL.createObjectURL(e.target.files[0]));
    // setImage(e.target.files[0]);
    setSelectedImage(file);

    // array.push(selectImage);
  };

  useEffect(() => {
    if (selectedImage) {
      setPayload({
        ...payload,
        images: [...payload.images, selectedImage],
      });
    }
  }, [selectedImage]);

  return (
    <div className="flex flex-col items-center justify-start h-full space-y-4 ">
      <div className="w-full px-4 h-32">
        <div className="w-full overflow-x-auto py-4">
          <Images selectImage={selectImage}></Images>
        </div>
      </div>
      <div className="w-full  px-4 space-y-4">
        <input
          type="text"
          name="title"
          className="bg-white shadow-md border-gray-300 rounded w-full h-12"
          style={{ borderWidth: "1px" }}
          onChange={payloadChange}
          placeholder="Title"
        ></input>

        <select
          onChange={(e) => payloadChange(e)}
          name="category"
          //value={payload.sizes}
          className="pl-2 sm:pl-4 shadow-md border-faded-gray rounded-md  h-12 w-full"
          style={{ borderWidth: "1px" }}
        >
          {categories?.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          key="price"
          type="text"
          name="price"
          className="bg-white shadow-md border-gray-300 rounded w-full h-12"
          style={{ borderWidth: "1px" }}
          onChange={payloadChange}
          placeholder="Enter price"
        ></input>

        <textarea
          className="bg-white shadow-md border-gray-300 rounded w-full px-1"
          rows="5"
          placeholder="Description "
          style={{ borderWidth: "1px" }}
          onChange={payloadChange}
          name="description"
        ></textarea>
      </div>
    </div>
  );
};

export default Info;
