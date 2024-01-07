export type cartItem = {
  id: number;
  name: string;
  ingredients: Array<string>;
  unitPrice: number;
  totalPrice: number;
  quantity: number;
};

export type cart = {
  items: Array<cartItem>;
  priority: boolean;
};

export type menuItem = {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
};
