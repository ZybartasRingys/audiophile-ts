import { ReactNode } from "react";

// Product types

export interface IProduct {
  desc: string;
  title: string;
  image: string;
  slug?: {
    current: string;
  };
  _id: string;
  price: number;
  features1: string;
  features2: string;
  box: Array<string>;
  productImages: Array<string>;
  unit: Array<string>;
  products: IProduct[];
  isNewProduct: boolean;
  className: string | undefined;
  item?: {
    image: string;
    price: number;
    title: string;
    slug: string;
  };
}

export type ProductsProps = {
  products: IProduct[];
};

// App context types

export type AppProvider = {
  children: ReactNode;
};

export interface IAppContext extends IProduct {
  headphones: IProduct[];
  speakers: IProduct[];
  earphones: IProduct[];
}

// header tyoe

export type HeaderProps = {
  title: string;
};

// Cart context types

export interface ICartContext {
  totalCartQuantity: number;
  cartItems: CartItemProps[];
  getItemsQuantity: (_id: string) => number;
  increaseCartQuantity: (_id: string) => void;
  decreaseCartQuantity: (_id: string) => void;
  removeAllCartItems: () => void;
  products: IProduct[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  // eslint-disable-next-line no-empty-pattern
  setProducts: ({}) => void;
  fetchProducts: () => void;
  options: Array<string>;
  checkedOption: string;
  setCheckedOption: (value: string) => void;
}

export type ShoppingCartProvider = {
  children: ReactNode;
};

export type CartItemProps = {
  _id: string;
  quantity: number;
};

// Form types

export type CheckoutItemProps = {
  _id: string;
  quantity: number;
};

// Modal types
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type Inputs = {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  ZIPCode: number;
  city: string;
  country: string;
  eMoneyNumber: number;
  eMoneyPin: number;
};
