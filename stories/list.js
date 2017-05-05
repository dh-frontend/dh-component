import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { List, Menu, Dropdown, Icon} from '../src';
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
  .add('默认列表', () => (
    <List>
      <List.Item key="1"> 我是一个自定义后缀的列表 </List.Item>
      <List.Item key="2"> 我是一个自定义后缀的列表 </List.Item>
      <List.Item key="3"> 我是一个自定义后缀的列表 </List.Item>
    </List>
  ))
  .add('后面带按钮', () => (
     <List>
        <List.Item key="1" suffix={suffix}> 我是一个自定义后缀的列表 </List.Item>
        <List.Item key="2" suffix={suffix}> 我是一个自定义后缀的列表 </List.Item>
        <List.Item key="3" suffix={suffix}> 我是一个自定义后缀的列表 </List.Item>
      </List>
  ))
  .add('点击子元素', () => (
    <List icon>
      <List.Item key="1" onSuffixClick={action('点击了第')}>点击后面的图标回调</List.Item>
      <List.Item key="2" onSuffixClick={action('点击了第')}>点击后面的图标回调</List.Item>
      <List.Item key="3" onSuffixClick={action('点击了第')}>点击后面的图标回调</List.Item>
      <List.Item key="4" onSuffixClick={action('点击了第')}>点击后面的图标回调</List.Item>
      </List>
  ))