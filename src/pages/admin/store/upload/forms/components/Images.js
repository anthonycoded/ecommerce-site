import React from "react";
import { onChange } from "../../../../../../utils/utils";

const Images = ({ selectImage }) => {
  const ImageUploader = () => (
    <div className=" p-4 flex justify-center border-2 border-gray-300 border-dashed rounded-md">
      <div className="space-y-1 text-center w-32">
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
              className="sr-only hidden"
              onChange={(e) => onChange(e, selectImage)}
            />
          </label>
        </div>
        <p className="text-xs text-gray-500">jpg, png, svg up to 10MB</p>
      </div>
    </div>
  );
  return (
    <div className=" w-full flex flex-row items-center justify-start space-x-4">
      <ImageUploader> </ImageUploader>
      <ImageUploader> </ImageUploader>
      <ImageUploader> </ImageUploader>
      <ImageUploader> </ImageUploader>
    </div>
  );
};

export default Images;
