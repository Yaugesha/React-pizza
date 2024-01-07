import { cart, cartItem } from "./types";

export const getCartQuantity = (cart: cart): number => {
  return cart.items.reduce((count, item) => count + item.quantity, 0);
};

export const getCartPrice = (cart: cart): number => {
  return cart.items.reduce((count, item) => count + item.totalPrice, 0);
};

export const getItemQuantity = (cart: cart, itemId: number): number => {
  return cart.items.find((item: cartItem) => item.id === itemId)!.quantity;
};
