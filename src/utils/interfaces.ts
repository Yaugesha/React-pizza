export interface updateItemQuantityP {
  itemId: number;
  currentQuantity: number;
}

export interface CartItemP {
  pizzaId: number;
  name: string;
  quantity: number;
  price: number;
}

export interface MenuItemP {
  item: {
    pizzaId: number;
    name: string;
    unitPrice: number;
    imageUrl: string;
    ingredients: string[];
    soldOut: boolean;
  };
}

export interface ButtonP {
  text: string;
  type?: string;
  disabled?: boolean;
  callback?: () => void;
}

export interface OrderItemP {
  item: {
    addIngredients: Array<string>;
    name: string;
    pizzaId: number;
    quantity: number;
    removeIngredients: Array<string>;
    totalPrice: number;
    unitPrice: number;
  };
}

export interface AdressP {
  latitude: number;
  longitude: number;
}

export interface OrderRouteParams {
  id: string;
}
