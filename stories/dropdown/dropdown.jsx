import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import { Dropdown, Menu, Button } from '../../src';

const SubMenu = Menu.SubMenu;

const menu = (
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
);

class DropdownDemo extends React.Component {
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
        <Dropdown overlay={menu} trigger="hover" visible={false}>
            <Button>Hover me</Button>
        </Dropdown>
        <Dropdown
          placement="bottomLeft"
          overlay={menu}
          visible={this.state.visible}
          onVisibleChange={this.handleVisible}
         >
          <Button>下拉菜单多选</Button>
         </Dropdown>
      </div>
    )
  }
}
export default DropdownDemo;
