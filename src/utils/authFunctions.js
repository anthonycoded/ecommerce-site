import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const authContext = React.createContext();
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function useAuth() {
  // const bitPanel = useSelector(
  //   (state) => state.config.bitPanel?.sessionTimeout
  // );
  const [authed, setAuthed] = React.useState(false);
  //const [timeout, setTimeout] = useState(false);

  return {
    authed,
    // timeout,

    login() {
      // wait(bitPanel * 9000).then(() => setTimeout(true)); ///2.5min    //60,000 * min = minutes
      // wait(bitPanel * 20000).then(() => setAuthed(false), setTimeout(false)); //5min //Session Timeout
      return new Promise((res) => {
        setAuthed(true);
        res();
      });
    },

    logout() {
      return new Promise((res) => {
        setAuthed(false);

        res();
      });
    },

    //return session Timeout variable to active timeout modal
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
