import { Component } from 'react'
import { StyleCart } from '../interfaces/Cart'
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

class Cart extends Component {
  render() {
    return(
      <div>
        <span style={styles.bubble}>
          <BubbleAlert />
        </span>
        <button style={styles.cart}>
          Cart
        </button>
      </div>
    )
  }
}

export default Cart