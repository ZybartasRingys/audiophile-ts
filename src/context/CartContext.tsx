import { createContext, useState, useEffect } from "react";

// Types
import {
  ICartContext,
  ShoppingCartProvider,
  CartItemProps,
  IProduct,
} from "../types";

import { getProductsBySlug } from "../../sanity/sanity";

export const CartContext = createContext({} as ICartContext);

export const CartContextProvider = ({ children }: ShoppingCartProvider) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  console.log(products);

  //get all products

  useEffect(() => {
    const getData = async () => {
      const allProducts = await getProductsBySlug();
      setProducts(allProducts);
    };
    getData();
  }, []);

  const totalCartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemsQuantity = (_id: "string") => {
    return cartItems.find((item) => item._id === _id)?.quantity || 0;
  };

  const increaseCartQuantity = (_id: "string") => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item._id === _id) == null) {
        return [...currItems, { _id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item._id === _id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (_id: "string") => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item._id === _id)?.quantity === 1) {
        return [...currItems.filter((item) => item._id !== _id)];
      } else {
        return currItems.map((item) => {
          if (item._id === _id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (_id: "string") => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item._id !== _id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        totalCartQuantity,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
