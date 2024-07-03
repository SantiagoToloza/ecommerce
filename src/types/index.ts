export type Product = {
  name: string;
  price: number;
  amount: number;
  id: number;
};

export interface CartItem extends Product {
  quantity: number;
}

export interface State {
  cart: CartItem[];
  products: Product[];
}

export type Action = { type: "ADD_TO_CART"; product: Product } | { type: "REMOVE_FROM_CART"; id: number } | { type: "CLEAR_CART" } | { type: "ADD_PRODUCT"; product: Product };

export type Products = Product[];
