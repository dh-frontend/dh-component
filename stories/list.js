import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { List, Menu, Dropdown, Icon} from '../src';
import withReadme from 'storybook-readme/with-readme';
import listReadme from '../doc/list.md';
const options = {
  inline: true
}
const menu = (
  <Menu>
    <Menu.Item>
    <span>菜单1</span>
    </Menu.Item>
    <Menu.Item>
    <span>菜单2</span>
    </Menu.Item>
  </Menu>
);
const suffix = (
  <Dropdown overlay={menu} trigger="click">
    <Icon type="setting"/>
  </Dropdown>
 );
storiesOf('列表组件', module)
  .addWithInfo('默认列表', withReadme(listReadme, () => (
    <List>
      <List.Item key="1"> 我是一个自定义后缀的列表 </List.Item>
      <List.Item key="2"> 我是一个自定义后缀的列表 </List.Item>
      <List.Item key="3"> 我是一个自定义后缀的列表 </List.Item>
    </List>
  )))