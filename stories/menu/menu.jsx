import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import { Menu, Button } from '../../src';

const SubMenu = Menu.SubMenu;

class MenuDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  handleVisible = (visible) => {
    this.setState({visible})
  }
  render() {
    return (
      <div>
        <Menu mode="inline">
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="inline">
            <Menu.Item key="1">子菜单项1</Menu.Item>
            <Menu.Item key="2">子菜单项1</Menu.Item>
            <Menu.Item key="3">子菜单项1</Menu.Item>
            <Menu.Item key="4">子菜单项1</Menu.Item>
            <Menu.Item key="5">子菜单项1</Menu.Item>
            <Menu.Item key="6">子菜单项2</Menu.Item>
          </SubMenu>
        </Menu>
        <Menu mode="vertical">
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="子菜单vertical">
            <Menu.Item key="1">子菜单项1</Menu.Item>
            <Menu.Item key="2">子菜单项1</Menu.Item>
            <Menu.Item key="3">子菜单项1</Menu.Item>
            <Menu.Item key="4">子菜单项1</Menu.Item>
            <Menu.Item key="5">子菜单项1</Menu.Item>
            <Menu.Item key="6">子菜单项2</Menu.Item>
          </SubMenu>
        </Menu>
        <Menu mode="inline">
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="子菜单horizontal">
            <Menu.Item key="1">子菜单项1</Menu.Item>
            <Menu.Item key="2">子菜单项1</Menu.Item>
            <Menu.Item key="3">子菜单项1</Menu.Item>
            <Menu.Item key="4">子菜单项1</Menu.Item>
            <Menu.Item key="5">子菜单项1</Menu.Item>
            <Menu.Item key="6">子菜单项2</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
export default MenuDemo;
