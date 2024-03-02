export type cartItem = {
  pizzaId: number;
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

export type user = {
  username: string;
  status: string;
  position: {
    latitude: number;
    longitude: number;
  };
  address: string;
  error: string;
};

export type menuItem = {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
};

export type pizzaNew = {
  pizza: {
    name: string;
    unitPrice: number;
    image: File;
    soldOut: boolean;
    ingredients: Array<ingredient>;
  };
};

export type ingredient = {
  id: number;
  name: string;
};

export type order = {
  cart: Array<orderItem>;
  estimatedDelivery: string;
  id: string;
  orderPrice: number;
  priority: boolean;
  priorityPrice: number;
  status: string;
};

export type orderItem = {
  addIngredients: Array<string>;
  name: string;
  pizzaId: number;
  quantity: number;
  removeIngredients: Array<string>;
  totalPrice: number;
  unitPrice: number;
};

export type orderNew = {
  customer: string;
  phone: string;
  adress: string;
  priority: boolean;
  cart: Array<orderItem>;
};

export type error = {
  data: string;
  message: string;
};
