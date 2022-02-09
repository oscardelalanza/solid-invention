import { Component } from 'react'
import { ProductsProps, StyleProducts } from '../interfaces/Products'
import Product from './Product'

const styles: StyleProducts = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

class Products extends Component<ProductsProps, {}> {
  render() {
    const { products, addToCart } = this.props

    return (
      <div style={styles.products}>
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
