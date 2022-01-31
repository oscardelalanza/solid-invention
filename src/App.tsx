import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'
import { Product, ProductCart } from './interfaces/Products'

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1500, img: '/products/tomato.jpg' },
      { name: 'Beans', price: 2500, img: '/products/beans.jpg' },
      { name: 'Lettuce', price: 500, img: '/products/lettuce.jpg' }
    ],
    cart: [
      // { name: 'Tomato', price: 1500, img: '/products/tomato.jpg', quantity: 1 }
    ]
  }

  addToCart = (product: Product) => {
    const { cart } = this.state

    if (cart.find((el: ProductCart ) => el.name === product.name)) {
      const newCart = cart.map((el: ProductCart) => el.name === product.name
        ? ({...el, quantity: el.quantity + 1})
        : el)
      return this.setState({ cart: newCart })
    }

    return this.setState({
      cart: (this.state.cart as Array<ProductCart>).concat({ ...product, quantity: 1 })
    })
  }

  render() {
    console.log(this.state.cart)
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
