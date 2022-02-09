import { Component } from 'react'
import { CartDetailProps, StyleCartDetail } from '../interfaces/CartDetail'

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
    return (
      <div style={styles.cartDetail}>
        Cart details
      </div>
    )
  }
}

export default CartDetail
