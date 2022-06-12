import React, { useState } from "react";
import { categories } from "../data";

const Info = ({ payloadChange, setImageFile, setImage }) => {
  const [selectedImage, setSelectedImage] = useState();

  const selectImage = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
    setSelectedImage(e.target.files[0]);
  };
  const ImageUploader = () => (
    <div className="h-full w-60">
      <div className="mt-2">
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <div className="flex flex-col text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload an image</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={(e) => selectImage(e)}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">jpg, png, svg up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col justify-start h-96 ">
      <div className="flex w-full  justify-center">
        <ImageUploader></ImageUploader>
      </div>

      <div className="w-full flex flex-col justify-between p-4">
        <input
          type="text"
          name="title"
          className="bg-white shadow-md border-gray-300 rounded w-ful  mb-4"
          style={{ borderWidth: "1px" }}
          onChange={payloadChange}
          placeholder="Title"
        ></input>
        <div className="flex w-full items-center ">
          <p className="text-xl font-semibold w-1/3 text-left ">Category:</p>
          <select
            onChange={(e) => payloadChange(e)}
            name="category"
            value={payload.sizes}
            className="pl-2 sm:pl-4 shadow-md border-faded-gray rounded-md  h-12 w-3/5 self-end"
            style={{ borderWidth: "1px" }}
          >
            {categories?.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="w-32">
          <label className="">Price:</label>
          <input
            key="price"
            type="text"
            name="price"
            className="bg-white shadow-md border-gray-300 rounded w-32"
            style={{ borderWidth: "1px" }}
            onChange={payloadChange}
            placeholder="0.00"
          ></input>
        </div>

        <textarea
          className="bg-white shadow-md border-gray-300 rounded w-full px-1"
          rows="3"
          placeholder="Produced by: "
          style={{ borderWidth: "1px" }}
          onChange={payloadChange}
          name="description"
        ></textarea>
      </div>
    </div>
  );
};

export default Info;
