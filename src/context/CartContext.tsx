import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
// Types
import {
  ICartContext,
  ShoppingCartProvider,
  CartItemProps,
  IProduct,
} from "../types";

import { useDisclosure } from "@chakra-ui/react";

import { getAllProducts } from "../../sanity/sanity";

export const CartContext = createContext({} as ICartContext);

export const CartContextProvider = ({ children }: ShoppingCartProvider) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItemProps[]>(
    "shopping-cart",
    []
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();

      setProducts(products);
    };
    fetchAllProducts();
  }, []);

  //get all products

  const totalCartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemsQuantity = (_id: string) => {
    return cartItems.find((item) => item._id === _id)?.quantity || 1;
  };

  const increaseCartQuantity = (_id: string) => {
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

  const decreaseCartQuantity = (_id: string) => {
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

  const removeAllCartItems = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeAllCartItems,
        cartItems,
        totalCartQuantity,
        products,
        isOpen,
        onOpen,
        onClose,
        setProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
