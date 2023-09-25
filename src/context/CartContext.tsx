import { createContext, PropsWithChildren } from 'react'
import { ICartProps } from '../types'

export const CartContext = createContext({} as ICartProps)

export const CartContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const addToCart = () => {
    console.log('added')
  }
  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
