import { ProductCart } from './Products'

export interface NavbarProps {
  cart: Array<ProductCart>
  visibleCart: () => void
}

export interface StyleNavbar {
  navbar: {}
}