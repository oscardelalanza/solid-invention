import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1500, img: '/products/tomato.jpg' },
      { name: 'Beans', price: 2500, img: '/products/beans.jpg' },
      { name: 'Lettuce', price: 500, img: '/products/lettuce.jpg' }
    ]
  }

  render() {
    return (
      <div>
        <Layout>
          <Products
            addToCart={() => console.log('empty')}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
