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
    return(
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={10} />
        </span>
        <button style={styles.cart}>
          Cart
        </button>
      </div>
    )
  }
}

export default Cart