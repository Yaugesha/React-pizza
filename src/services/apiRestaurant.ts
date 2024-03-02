import { orderNew, menuItem, order } from "../utils/types";

const API_URL = "http://localhost:3000/api/v1";

export async function getMenu(): Promise<Array<menuItem>> {
  const res = await fetch(`${API_URL}/pizzas`);

  if (!res.ok) throw Error("Failed getting menu");

  const data = await res.json();
  return data;
}

export async function createPizza(
  newPizza: FormData
): Promise<Array<menuItem>> {
  try {
    console.log(newPizza);
    const res = await fetch(`${API_URL}/pizzas`, {
      method: "POST",
      body: newPizza,
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed creating new Pizza");
  }
}

export async function getIngredients(): Promise<Array<menuItem>> {
  const res = await fetch(`${API_URL}/ingredients`);

  if (!res.ok) throw Error("Failed getting ingredients");

  const data = await res.json();
  return data;
}

export async function getOrder(id: string) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder: FormData): Promise<order> {
  try {
    console.log(newOrder);
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: newOrder,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data as order;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id: string, updateObj: orderNew) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
