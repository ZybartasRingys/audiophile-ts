export interface IProduct {
  desc: 'string'
  title: 'string'
  image: 'string'
  slug: 'string'
  price: number
  features?: 'string'
  box: Array<string>
  productImages: Array<string>
  unit: Array<string>
}

export interface ICartProps {
  totalPrice: number
  totalCartItems: number
  addToCart: () => void
  removeAllCartItems: () => void
}
