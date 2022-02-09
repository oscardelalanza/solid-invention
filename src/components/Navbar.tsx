import { Component } from 'react'
import { StyleNavbar, NavbarProps } from '../interfaces/Navbar'
import Cart from './Cart'
import Logo from './Logo'

const styles: StyleNavbar = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)'
  }
}

class Navbar extends Component<NavbarProps, {}> {
  render() {
    const { cart, visibleCart, showCart } = this.props

    return (
      <nav style={styles.navbar}>
        <Logo />
        <Cart cart={cart} visibleCart={visibleCart} showCart={showCart} />
      </nav>
    )
  }
}

export  default Navbar
