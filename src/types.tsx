import { ReactNode } from "react";

export interface IProduct {
  desc: "string";
  title: "string";
  image: "string";
  slug: "string";
  _id: "string";
  price: number;
  features?: "string";
  box: Array<string>;
  productImages: Array<string>;
  unit: Array<string>;
}

// Cart types

export interface ICartContext {
  totalCartQuantity: number;
  cartItems: CartItemProps[];
  getItemsQuantity: (_id: "string") => number;
  increaseCartQuantity: (_id: "string") => void;
  decreaseCartQuantity: (_id: "string") => void;
  removeFromCart: (_id: "string") => void;
  removeAllCartItems: (_id: "string") => void;
}

export type ShoppingCartProvider = {
  children: ReactNode;
};

export type CartItemProps = {
  _id: "string";
  quantity: number;
};
