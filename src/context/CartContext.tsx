import { createContext, PropsWithChildren, useState } from 'react'
import { ICartProps } from '../types'

export const CartContext = createContext({} as ICartProps)

export const CartContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCartItems, setTotalCartitems] = useState(0)

  //desc add to cart functionality
  const addToCart = () => {
    console.log('added')
  }

  const removeAllCartItems = () => {
    console.log('removed')
  }
  return (
    <CartContext.Provider
      value={{ addToCart, totalPrice, totalCartItems, removeAllCartItems }}>
      {children}
    </CartContext.Provider>
  )
}
