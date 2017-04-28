import React from 'react';
import { Button, Menu } from '../src/'
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
        <div style={{marginTop: 12}}>
          <Menu mode="inline">
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.SubMenu title="我能展开">
              <Menu.Item>我是可展开的菜单</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>

      </div>
    )
  }
}
export default ButtonTest;
