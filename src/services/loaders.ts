import { LoaderFunctionArgs } from "react-router-dom";
import { findPizza, getIngredients, getMenu, getOrder } from "./apiRestaurant";
import { ingredient, menuItem } from "../utils/types";

export async function menuLoader(): Promise<Array<menuItem>> {
  const menu = await getMenu();
  return menu;
}

export const orderLoader = async ({ params }: LoaderFunctionArgs) => {
  if (params.id === undefined) {
    throw new Error("params.id is undefined");
  }
  const orderData = await getOrder(params.id);
  return orderData;
};

export async function ingredientsLoader(): Promise<Array<ingredient>> {
  const ingredients = await getIngredients();
  return ingredients;
}

export const pizzaLoader = async ({ params }: LoaderFunctionArgs) => {
  if (params.id === undefined) {
    throw new Error("params.id is undefined");
  }
  const pizza = await findPizza(params.id);
  return pizza;
};

export const editPizzaLoader = (params: LoaderFunctionArgs) => {
  return Promise.all([ingredientsLoader(), pizzaLoader(params)]);
};
