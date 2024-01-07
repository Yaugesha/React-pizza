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
  callback: () => void;
}
