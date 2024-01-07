import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { cart, cartItem } from "../../utils/types";

const initialState: cart = {
  items: [],
  priority: false,
};

const getItem = (
  items: Array<cartItem>,
  itemID: number
): cartItem | undefined => {
  return items.find((item) => {
    return item.id === itemID;
  });
};

const deleteItem = (
  items: Array<cartItem>,
  itemID: number
): Array<cartItem> => {
  return items.filter((item) => {
    return item.id !== itemID;
  });
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<cartItem>) {
      state.items.push({
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.unitPrice,
      });
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.items = deleteItem(state.items, action.payload);
    },
    incrimentItem(state, action: PayloadAction<number>) {
      const item = getItem(state.items, action.payload);
      item!.quantity++;
      item!.totalPrice = item!.quantity * item!.unitPrice;
    },
    decrimentItem(state, action: PayloadAction<number>) {
      const item = getItem(state.items, action.payload);
      item!.quantity--;
      item!.totalPrice = item!.quantity * item!.unitPrice;
    },
    clear() {
      return initialState;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
