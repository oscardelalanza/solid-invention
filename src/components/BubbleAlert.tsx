import { Component } from 'react'
import { BubbleAlertProps, StyleBubbleAlert } from '../interfaces/BubbleAlert'

const styles: StyleBubbleAlert = {
  bubbleAlert: {
    backgroundColor: '#e9725a',
    borderRadius: '15px',
    color: '#fff',
    padding: '2px 10px',
    fontSize: '0.9rem',
    width: '20px'
  }
}

class BubbleAlert extends Component <BubbleAlertProps, {}> {
  getNumber(n: number): string {
    if(!n) { return '' }

    return n > 9 ? '9+' : n.toString()
  }

  render() {
    const { value } = this.props
    return (
      <span style={styles.bubbleAlert}>
        {this.getNumber(value)}
      </span>
    )
  }
}

export default BubbleAlert
