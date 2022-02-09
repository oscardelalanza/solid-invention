import { Component } from 'react'
import { StyleTitle } from '../interfaces/Title'

const styles: StyleTitle = {
  title: {
    marginBottom: '30px'
  }
}

class Title extends Component {
  render() {
    return (
      <h1 style={styles.title}>Store</h1>
    )
  }
}

export default Title
