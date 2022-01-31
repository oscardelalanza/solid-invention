import { Component } from 'react'
import { CartProps, StyleCart } from '../interfaces/Cart'
import BubbleAlert from './BubbleAlert'

const styles: StyleCart = {
  cart: {
    backgroundColor: '#359a2c',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer'
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20
  }
}

class Cart extends Component<CartProps, {}> {
  render() {
    const { cart } = this.props
    const quantity = cart.reduce((acc, el) => acc + el.quantity, 0)

    return(
      <div>
        <span style={styles.bubble}>
          {quantity !== 0
          ? <BubbleAlert value={quantity} />
          : null}
        </span>
        <button style={styles.cart}>
          Cart
        </button>
      </div>
    )
  }
}

export default Cart