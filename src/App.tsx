import { Component } from 'react'

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
        <p>Hello World</p>
      </div>
    )
  }
}

export default App;
