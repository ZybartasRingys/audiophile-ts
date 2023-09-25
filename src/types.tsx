import { ReactNode } from "react";

export interface IProduct {
  desc: "string";
  title: "string";
  image: "string";
  slug: "string";
  price: number;
  features?: "string";
  box: Array<string>;
  productImages: Array<string>;
  unit: Array<string>;
}

// Cart types

export interface ICartContext {
  totalPrice: number;
  totalCartQuantity: number;
  cartItems: CartItem[];
  getItemsQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  removeAllCartItems: (id: number) => void;
}

export type ShoppingCartProvider = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};
