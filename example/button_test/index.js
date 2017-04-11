import React from 'react';
import { Button } from '../../src/'
class ButtonTest extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Button >默认按钮</Button>
        <Button type="primary">正常按钮</Button>
        <Button type="danger">危险按钮</Button>
        <Button icon="search">图标按钮</Button>
        <Button type="primary" size="small">小按钮</Button>
        <Button icon="search" shape="circle" type="primary"/>
        <Button icon="search" shape="circle" type="danger"/>
      </div>
    )
  }
}
export default ButtonTest;
