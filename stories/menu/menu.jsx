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
        <Menu>
          <Menu.Item>菜单项</Menu.Item>
          <SubMenu title="子菜单">
            <Menu.Item>子菜单项</Menu.Item>
          </SubMenu>
        </Menu>
        <br/>
        <Menu multiple>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">第一个</a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">第二个</a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">第三个</a>
          </Menu.Item>
          <Menu.Divider />
          <SubMenu title="更多">
            <Menu.Item>3d menu item</Menu.Item>
            <Menu.Item>4th menu item</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
export default MenuDemo;
