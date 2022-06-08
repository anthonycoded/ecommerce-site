import axios from "axios";
axios.defaults.withCredentials = true;

export const PostRequest = async (link, requestData) => {
  return await axios.post(link, requestData, {
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    httpsAgent: { rejectUnauthorized: false },
    timeout: 1000 * 60,
  });
};
export const GetRequest = async (link) => {
  return await axios.get(link, {
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },

    timeout: 1000 * 60,
  });
};
export const DeleteRequest = async function (link, requestData) {
  return await axios.get(link, requestData, {
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },

    timeout: 1000 * 60,
  });
};
