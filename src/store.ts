import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer, { cart } from "./features/cart/cartSlice";

export type store = {
  user: user;
  cart: cart;
};

type user = {
  username: string;
};

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
