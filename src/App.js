import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppWrapper from "./AppWrapper";
import { AuthProvider } from "./utils/authFunctions";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppWrapper></AppWrapper>
      </AuthProvider>
    </Provider>
  );
}

export default App;
