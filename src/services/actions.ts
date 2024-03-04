import { redirect } from "react-router-dom";
import { clear } from "../features/cart/cartSlice";
import store from "../store";
import { RequestData } from "../utils/interfaces";
import { ingredientNew, orderNew } from "../utils/types";
import { createIngredient, createOrder } from "./apiRestaurant";

export const createOrderAction = async ({
  request,
}: {
  request: RequestData;
}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    order: {
      ...data,
      cart: JSON.parse(data.cart.toString()),
      priority: data.priority === "true",
    },
  } as orderNew;

  const newOrder = await createOrder(order);
  store.dispatch(clear());
  return redirect(`/order/${newOrder.id}`);
};

export const createIngredientAction = async ({
  request,
}: {
  request: RequestData;
}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const ingredient = {
    ingredient: data,
  } as unknown as ingredientNew;

  const newIngredient = await createIngredient(ingredient);
  console.log(newIngredient);
};
