import { configureStore } from "@reduxjs/toolkit";
import { customerReducer } from "./reducers/customerReducer";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";

export const store = configureStore({
  reducer: { auth: authReducer, customers: customerReducer, cart: cartReducer },
});
