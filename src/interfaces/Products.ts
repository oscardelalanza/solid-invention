interface Product {
  name: string
  price: number
  img: string
}

export interface ProductsProps {
  products: Array<Product>
  addToCart: () => void
}