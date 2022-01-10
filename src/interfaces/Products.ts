interface Product {
  name: string
  price: number
  img: string
}

export interface ProductsProps {
  products: Array<Product>
  addToCart: () => void
}

export interface ProductProps {
  addToCart: (product: Product) => void
  product: Product
}

export interface StyleProducts {
  products: {}
}

export interface StyleProduct {
  product: {}
  img: {}
}