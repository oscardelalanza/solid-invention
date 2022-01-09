import { Component } from 'react'
import Products from './components/Products'

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
        <Products
          addToCart={() => console.log('empty')}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App;
