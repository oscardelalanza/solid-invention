import { Component } from 'react'
import { StyleLogo } from '../interfaces/Logo'

const styles: StyleLogo = {
  logo: {
    fontWeight: '700',
    fontSize: '2rem'
  }
}

class Logo extends Component {
  render() {
    return (
      <div style={styles.logo}>
        Shop
      </div>
    )
  }
}

export default Logo