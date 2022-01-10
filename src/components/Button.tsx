import { Component } from 'react'
import { ButtonProps, StyleButton } from '../interfaces/Button'

const styles: StyleButton = {
  button: {
    backgroundColor: '#0a283e',
    color: '#fff',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}

class Button extends Component<ButtonProps, {}> {
  render() {
    return (
      <button style={styles.button} {...this.props} />
    )
  }
}

export default Button
