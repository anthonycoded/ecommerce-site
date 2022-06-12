import { configureStore } from "@reduxjs/toolkit";
import { customerReducer } from "./reducers/customerReducer";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";
import { productReducer } from "./reducers/productReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
    cart: cartReducer,
    products: productReducer,
  },
});
