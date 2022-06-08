const API_Request_Completed = "API_Request_Completed";
const API_Request_Error = "API_Request_Error";
const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

const ErrorHandler = (error, dispatch) => {
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  if (error?.response) {
    //Too many login attempts, account is blocked
    if (error?.response?.data?.errorCode == 102) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error:
            "Too many incorrect login attempts, your account has been restricted. Please contact us to unlock your account",
          status: 102,
        },
      });
    }

    //Password incorrect
    else if (error.response.status == 401) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error: "Username or Password incorrect. Please try again",
          status: 401,
        },
      });
    }
    //Username incorrect, does not match records
    else if (error.response.status == 404) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error:
            "Username did not match any account. If you do not have an account please create a new one ",
          status: 404,
        },
      });
    }
    if (error?.response.status == 400) {
      dispatch({
        type: API_Request_Error,
        payload: "Bad Request, Contact your financial institution",
      });
      wait(50).then(() => dispatch({ type: API_Request_Completed }));
      return;
    }
    if (error?.response.status == 500) {
      dispatch({
        type: API_Request_Error,
        payload:
          "Sorry, looks like our systems may be down.Please try again later.",
      });
      wait(50).then(() => dispatch({ type: API_Request_Completed }));
    }
    if (error.response.status == 302) {
      wait(50).then(() => dispatch({ type: API_Request_Completed }));
      return <Navigate to="/"></Navigate>;
    }
  }
};

export default ErrorHandler;
