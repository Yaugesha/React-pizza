import {
  orderNew,
  menuItem,
  order,
  ingredient,
  ingredientNew,
} from "../utils/types";

const API_URL = "http://localhost:3000/api/v1";

export async function getMenu(): Promise<Array<menuItem>> {
  const res = await fetch(`${API_URL}/pizzas`);

  if (!res.ok) throw Error("Failed getting menu");

  const data = await res.json();
  return data;
}

export async function createPizza(newPizza: FormData): Promise<menuItem> {
  try {
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

export async function updatePizza(
  newPizza: FormData,
  pizzaId: number
): Promise<menuItem> {
  try {
    const res = await fetch(`${API_URL}/pizzas/${pizzaId}`, {
      method: "PATCH",
      body: newPizza,
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed upadting Pizza");
  }
}

export async function findPizza(id: string): Promise<menuItem> {
  try {
    const res = await fetch(`${API_URL}/pizzas/${id}`, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3MjcwNzJmNS03OWNjLTRjNzQtYWU4Yy1mZjVlYzc5NmZjZGEiLCJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzEwMDE0MDU3LCJleHAiOjE3MTAwMTU4NTd9.9dbzbFGjHzOxM5YO71Fr95wR82slbDYpHv5c9W80K4I",
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed to find Pizza with id: " + id);
  }
}

export async function deletePizza(pizzaId: number): Promise<string> {
  try {
    const res = await fetch(`${API_URL}/pizzas/${pizzaId}`, {
      method: "Delete",
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed delete Pizza");
  }
}

export async function getIngredients(): Promise<Array<ingredient>> {
  const res = await fetch(`${API_URL}/ingredients`);

  if (!res.ok) throw Error("Failed getting ingredients");

  const data = await res.json();
  return data;
}

export async function createIngredient(
  newIngredient: ingredientNew
): Promise<ingredientNew> {
  try {
    const res = await fetch(`${API_URL}/ingredients`, {
      method: "POST",
      body: JSON.stringify(newIngredient),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed creating new Ingredient");
  }
}

export async function deleteIngredient(ingredientId: number): Promise<string> {
  try {
    const res = await fetch(`${API_URL}/ingredients/${ingredientId}`, {
      method: "Delete",
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed delete Ingredient");
  }
}

export async function updateIngredient(
  ingredient: ingredientNew,
  ingredientId: number
): Promise<ingredient> {
  try {
    const res = await fetch(`${API_URL}/ingredients/${ingredientId}`, {
      method: "PATCH",
      body: JSON.stringify(ingredient),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed upadting Ingredient");
  }
}

export async function findIngredient(id: string): Promise<ingredient> {
  try {
    const res = await fetch(`${API_URL}/ingredients/${id}`);

    if (!res.ok) throw Error();

    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed to find Ingredient with id: " + id);
  }
}

export async function getOrders() {
  const res = await fetch(`${API_URL}/orders`);
  if (!res.ok) throw Error(`Couldn't find any orders`);

  const data = await res.json();
  return data;
}

export async function getOrder(id: string) {
  const res = await fetch(`${API_URL}/orders/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const data = await res.json();
  return data;
}

export async function createOrder(newOrder: orderNew): Promise<order> {
  try {
    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
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
