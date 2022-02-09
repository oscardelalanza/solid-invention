import { Component } from 'react'
import { CartDetailProps, StyleCartDetail } from '../interfaces/CartDetail'
import { ProductCart } from '../interfaces/Products'

const styles: StyleCartDetail = {
  cartDetail: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50
  }
}

class CartDetail extends Component<CartDetailProps, {}> {
  render() {
    const { cart } = this.props
    console.log(cart)
    return (
      <div style={styles.cartDetail}>
        <ul>
          {cart.map((product: ProductCart) =>
            <li key={product.name}>
              <img src={product.img} alt={product.name} width='50' height='32' />
              {product.name} <span>{product.quantity}</span>
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default CartDetail
