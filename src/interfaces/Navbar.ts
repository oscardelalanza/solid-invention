import { ProductCart } from './Products'

export interface NavbarProps {
  cart: Array<ProductCart>
  visibleCart: Boolean
  showCart: () => void
}

export interface StyleNavbar {
  navbar: {}
}