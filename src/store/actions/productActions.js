import HandleError from "../../functions/ErrorHandler";
import { GetRequest, PostRequest, DeleteRequest } from "../../../ApiCalls";
const Global = require("../../../Global.js");

const Get_All_Products = "Get_All_Products";
const Publish_Product = "Publish_Product";
const Delete_Product = "Delete_Product";
const Audio_Uploaded = "Audio_Uploaded";
const API_Request_Sent = "API_Request_Sent";
const API_Request_Completed = "API_Request_Completed";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const PublishProduct = (payload) => async (dispatch) => {
  await sendRequest();
  async function sendRequest() {
    dispatch({ type: API_Request_Sent });
  }
  try {
    let response = await PostRequest(Global.PublishBeat, payload);

    if (response.status == 201) {
      dispatch({ type: Publish_Beat, payload: payload });
      wait(50).then(() =>
        dispatch({
          type: API_Request_Completed,
        })
      );
    }
  } catch (error) {
    HandleError(error, dispatch);
  }
};

export const GetProducts = () => async (dispatch) => {
  async function sendRequest() {
    dispatch({ type: API_Request_Sent });
  }
  try {
    await sendRequest();
    let response = await GetRequest(Global.GetBeatList);

    if (response.status == 200) {
      dispatch({ type: Get_All_Beats, payload: response?.data });
      wait(50).then(() =>
        dispatch({
          type: API_Request_Completed,
        })
      );
    }
  } catch (error) {
    console.log("error: ", error);
    HandleError(error, dispatch);
  }
};

export const DeleteProduct = (payload) => async (dispatch) => {
  async function sendRequest() {
    dispatch({ type: API_Request_Sent });
  }
  let data = { id: payload };
  try {
    await sendRequest();
    let response = await PostRequest(Global.DeleteBeat, data);

    if (response.status == 200) {
      dispatch({ type: Delete_Beat, payload: payload });
      wait(50).then(() =>
        dispatch({
          type: API_Request_Completed,
        })
      );
    }
  } catch (error) {
    console.log("error: ", error);
    HandleError(error, dispatch);
  }
};

export const UpdateProduct = (payload) => async (dispatch) => {
  async function sendRequest() {
    dispatch({ type: API_Request_Sent });
  }
  let data = { id: payload };
  try {
    await sendRequest();
    let response = await PostRequest(Global.DeleteBeat, data);

    if (response.status == 200) {
      dispatch({ type: Delete_Beat, payload: payload });
      wait(50).then(() =>
        dispatch({
          type: API_Request_Completed,
        })
      );
    }
  } catch (error) {
    console.log("error: ", error);
    HandleError(error, dispatch);
  }
};
