import { ReactNode } from 'react'

// Product types

export interface IProduct {
  desc: 'string'
  title: 'string'
  image: 'string'
  slug: 'string'
  _id: 'string'
  price: number
  features?: 'string'
  box: Array<string>
  productImages: Array<string>
  unit: Array<string>
  products: IProduct[]
}

export type ProductsProps = {
  products: IProduct[]
}

// App context types

export type AppProvider = {
  children: ReactNode
}

export interface IAppContext extends IProduct {
  headphones: IProduct[]
  speakers: IProduct[]
  earphones: IProduct[]
}

// header tyoe

export type HeaderProps = {
  title: 'string'
}

// Cart context types

export interface ICartContext {
  totalCartQuantity: number
  cartItems: CartItemProps[]
  getItemsQuantity: (_id: 'string') => number
  increaseCartQuantity: (_id: 'string') => void
  decreaseCartQuantity: (_id: 'string') => void
  removeAllCartItems: () => void
  products: IProduct[]
}

export type ShoppingCartProvider = {
  children: ReactNode
}

export type CartItemProps = {
  _id: 'string'
  quantity: number
}

// Form types

export type CheckoutItemProps = {
  _id: 'string'
  quantity: number
}
