import { Component } from 'react'
import { ProductsProps } from '../interfaces/Products'
import Product from './Product'

class Products extends Component<ProductsProps, {}> {
  render() {
    const { products, addToCart } = this.props

    return (
      <div>
        {products.map(product =>
          <Product
            addToCart={addToCart}
            key={product.name}
            product={product}
          />)}
      </div>
    )
  }
}

export default Products
