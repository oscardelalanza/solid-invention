import { Component } from 'react'
import { ProductsProps } from '../interfaces/Products'

class Products extends Component<ProductsProps, {}> {
  render() {
    const { products, addToCart } = this.props

    return (
      <p>products</p>
    )
  }
}

export default Products
