import { ProductCart } from './Products'

export interface CartProps {
  cart: Array<ProductCart>
  visibleCart: Boolean
  showCart: () => void
}

export interface StyleCart {
  cart: {}
  bubble: {}
}