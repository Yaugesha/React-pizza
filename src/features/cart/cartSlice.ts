import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type cartItem = {
  name: string;
  ingredients: Array<string>;
  unitPrice: number;
  count: number;
};

export type cart = {
  items: Array<cartItem>;
  priority: boolean;
  totalPrice: number;
  quantity: number;
};

const initialState: cart = {
  items: [],
  priority: false,
  totalPrice: 0,
  quantity: 0,
};

const getItem = (
  items: Array<cartItem>,
  itemName: string
): cartItem | undefined => {
  return items.find((item) => {
    return item.name === itemName;
  });
};

const deleteItem = (
  items: Array<cartItem>,
  itemName: string
): Array<cartItem> => {
  return items.filter((item) => {
    return item.name !== itemName;
  });
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<cartItem>) {
      state.items.push({ ...action.payload, count: 1 });
      state.totalPrice += action.payload.unitPrice;
      state.quantity += 1;
    },
    deleteItem(state, action: PayloadAction<cartItem>) {
      state.totalPrice -=
        getItem(state.items, action.payload.name)!.count *
        action.payload.unitPrice;
      state.quantity -= getItem(state.items, action.payload.name)!.count;
      state.items = deleteItem(state.items, action.payload.name);
    },
    incrimentItem(state, action: PayloadAction<cartItem>) {
      getItem(state.items, action.payload.name)!.count += 1;
      state.totalPrice += action.payload.unitPrice;
      state.quantity += 1;
    },
    decrimentItem(state, action: PayloadAction<cartItem>) {
      getItem(state.items, action.payload.name)!.count -= 1;
      state.totalPrice -= action.payload.unitPrice;
      state.quantity -= 1;
    },
    clear() {
      return initialState;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
