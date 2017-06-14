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
          <Menu.Item>菜单项1</Menu.Item>
          <Menu.Item>菜单项2</Menu.Item>
          <SubMenu title="子菜单inline">
            <Menu.Item key="1">子菜单项1</Menu.Item>
            <Menu.Item key="2">子菜单项1</Menu.Item>
            <Menu.Item key="3">子菜单项1</Menu.Item>
            <Menu.Item key="4">子菜单项1</Menu.Item>
            <Menu.Item key="5"></Menu.Item>
            <Menu.Item key="6">子菜单项2</Menu.Item>
          </SubMenu>
        </Menu>
        <br/>
        <hr />
        <div style={{width: '300px'}}>
            <Menu>
          <Menu.Item>菜单项</Menu.Item>
          <Menu.Item>菜单项</Menu.Item>
          <Menu.Item>菜单项</Menu.Item>
          <Menu.Item>菜单项</Menu.Item>
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="子菜单inline">
            <Menu.Item key="1">子菜单项1</Menu.Item>
            <Menu.Item key="2">子菜单项1</Menu.Item>
            <Menu.Item key="3">子菜单项1</Menu.Item>
            <Menu.Item key="4">子菜单项1</Menu.Item>
            <Menu.Item key="5"></Menu.Item>
            <Menu.Item key="6">子菜单项2</Menu.Item>
          </SubMenu>
        </Menu>
        </div>        
        <br/>
        <hr />
        <div style={{width: '300px'}}>
        <Menu mode="horizontal">
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="菜单项子集">
            <Menu.Item key="1">子菜单项1</Menu.Item>
            <Menu.Item key="2">子菜单项1</Menu.Item>
            <Menu.Item key="3">子菜单项1</Menu.Item>
            <Menu.Item key="4">子菜单项1</Menu.Item>
            <Menu.Item key="5">子菜单项1</Menu.Item>
            <Menu.Item key="6">子菜单项2</Menu.Item>
          </SubMenu>
        </Menu>
        </div>
      </div>
    )
  }
}
export default MenuDemo;
