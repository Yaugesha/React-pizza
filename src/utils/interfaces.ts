export interface updateItemQuantityP {
  itemId: number;
  currentQuantity: number;
}

export interface CartItemP {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface MenuItemP {
  item: {
    id: number;
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
  callback?:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement>) => Promise<void>);
}

export interface OrderItemP {
  item: {
    addIngredients: Array<string>;
    name: string;
    id: number;
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
export interface RequestData {
  formData: () => Promise<FormData>;
}
