import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { Dropdown, Menu, Button } from '../../src';
import DropdownDemo from './dropdown'
import withReadme from 'storybook-readme/with-readme';
const SubMenu = Menu.SubMenu;
const options = {
  inline: true, propTables: false
}
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">第一个</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">第二个</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">第三个</a>
    </Menu.Item>
    <SubMenu title="更多">
      <Menu.Item>3d menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

storiesOf('Dropdown 下拉菜单', module)
  .addWithInfo('默认列表', () => (
    <div>
      <DropdownDemo />
    </div>
  ), options)
