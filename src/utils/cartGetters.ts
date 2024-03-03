import { cart, cartItem } from "./types";

export const getCartQuantity = (cart: cart): number => {
  return cart.items.reduce((count, item) => count + item.quantity, 0);
};

export const getCartPrice = (cart: cart): number => {
  const pizzasPrice = cart.items.reduce(
    (count, item) => count + item.totalPrice,
    0
  );
  return cart.priority ? pizzasPrice + pizzasPrice * 0.2 : pizzasPrice;
};

export const getItemQuantity = (cart: cart, id: number): number => {
  return cart.items.find((item: cartItem) => item.id === id)!.quantity;
};
