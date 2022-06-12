import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BounceLoader, FadeLoader } from "react-spinners";

import Info from "./uploadFormSteps/Info";

import {
  PublishProduct,
  UpdateProduct,
  DeleteProduct,
  GetProducts,
} from "../../../../store/actions/productActions";

const Upload = ({ open, setOpen }) => {
  const [imageFile, setImageFile] = useState([]);
  const [image, setImage] = useState([]);
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [payload, setPayload] = useState({
    title: undefined,
    images: [],
    price: undefined,
    description: undefined,
    featured: false,
    colors: [{ size: "", qty: undefined, color: undefined }], //Ex. {size: "xs", qty: 10, color:"aqua/southbeach"}
    category: undefined,
    tags: [],
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: undefined,
    message: undefined,
    disabled: true,
    step: 0,
  });

  const payloadChange = (e) => {
    e.preventDefault();
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const publish = async () => {
    try {
      setStatus({
        ...status,
        loading: true,
        message: "Publishing Product",
      });
      dispatch(PublishProduct(payload));
    } catch (error) {
      console.log(error);
    }
  };

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  useEffect(() => {
    if (state.status == true) {
      setStatus({
        ...status,
        loading: false,
        message: undefined,
        step: 0,
      });
      setPayload({
        title: undefined,
        images: [],
        price: undefined,
        description: undefined,
        featured: false,
        colors: {},
      });
    }
  }, [products]);

  const Buttons = () => (
    <div>
      {step === 1 ? (
        <div className="flex justify-end space-x-6">
          <button
            onClick={() => setOpen(false)}
            className="w-32 h-12 rounded-md shadow-sm font-medium hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setStep(2);
            }}
            type="button"
            className="h-12 w-32 rounded-md border disabled:opacity-50 bg-green-400  shadow-sm px-4 py-2  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Next
          </button>
        </div>
      ) : step === 2 ? (
        <div className="flex justify-end space-x-6">
          <button
            onClick={() => setStep(1)}
            type="button"
            className="w-32 h-12 font-medium rounded-md shadow-sm bg-yellow-400  text-gray-500 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Back
          </button>
          <button
            onClick={() => setStep(3)}
            type="button"
            className="h-12 w-32 bg-green-400 font-medium rounded-md border border-gray-300 shadow-sm px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Next
          </button>
        </div>
      ) : (
        <div className="flex justify-end space-x-6">
          <button
            onClick={() => setStep(2)}
            type="button"
            className="w-32 h-12  rounded-md shadow-sm font-medium bg-yellow-400  text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Back
          </button>
          <button
            onClick={publishSong}
            type="button"
            className="h-12 w-32 rounded-md border shadow-sm font-medium  bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Publish
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex flex-row items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center  sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75 w-full h-full"></div>
        </div>

        {/* <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span> */}

        <div
          className="flex flex-col relative  justify-between h-full w-full bg-white p-4 rounded-lg text-left shadow-xl sm:my-8  sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <h3 className="text-2xl font-bold leading-6  text-gray-900 text-center mb-8">
            Upload Song
          </h3>
          {status.loading ? (
            <div className="w-full h-60 items-center justify-center flex flex-col">
              <FadeLoader loading={publishing} color="blue"></FadeLoader>
              <p className="text-xl font-semibold  capitalize text-primary">
                Publishing product to store...
              </p>
            </div>
          ) : (
            <div className="w-full h-full">
              {step == 0 ? (
                <Info
                  payloadChange={payloadChange}
                  setImageFile={setImageFile}
                  setImage={setImage}
                ></Info>
              ) : (
                <Confirmation
                  payload={payload}
                  imageFile={imageFile}
                ></Confirmation>
              )}
            </div>
          )}
          <div>
            <Buttons></Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
