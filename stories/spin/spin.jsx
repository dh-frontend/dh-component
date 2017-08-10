import React, { Component } from 'react'
import { Button, Spin, DatePicker } from '../../src'

class SpinDemo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </div>
    )
  }
}
export default SpinDemo;