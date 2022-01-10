import { Component } from 'react'
interface ButtonProps {
  onClick: () => void
}

class Button extends Component<ButtonProps, {}> {
  render() {
    return (
      <button />
    )
  }
}

export default Button
