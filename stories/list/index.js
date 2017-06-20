import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';

import { List, Menu, Dropdown, Icon, Avatar} from '../../src';
import listReadme from './list.md';
const addWithInfoOptions = { inline: true, propTables: false };
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
    <Icon type="list-circle"/>
  </Dropdown>
 );
storiesOf('列表组件', module)
  .addDecorator(withReadme(listReadme))
  .addWithInfo('默认列表', () => (
    <List mode="only" >
      <List.Item key="1" onClick={action('onClick')}> 我是默认列表 </List.Item>
      <List.Item key="2" onClick={action('onClick')}> 我是默认列表 </List.Item>
      <List.Item key="3" onClick={action('onClick')}> 我是默认列表 </List.Item>
    </List>
  ), addWithInfoOptions)
  .addWithInfo('单行选择', () => (
    <List
      mode="only"
      selectedKeys={['1']}
      onChange={action('onChange')}>
      <List.Item key="1"> 我可以被操作选择</List.Item>
      <List.Item key="2"> 我可以被操作选择</List.Item>
      <List.Item key="3"> 我可以被操作选择</List.Item>
    </List>
  ), addWithInfoOptions)
  .addWithInfo('单行选择不可变', () => (
    <List
      mode="only"
      immutable
      icon
      onChange={action('onChange')}>
      <List.Item key="1"> 我可以被操作选择, 但是不可变</List.Item>
      <List.Item key="2"> 我可以被操作选择, 但是不可变</List.Item>
      <List.Item key="3"> 我可以被操作选择, 但是不可变</List.Item>
    </List>
  ), addWithInfoOptions)
  .addWithInfo('多行选择', () => (
    <List mode="multiple" icon onChange={action('onChange')}>
      <List.Item key="1"> 来点我一下</List.Item>
      <List.Item key="2"> 来点我一下</List.Item>
      <List.Item key="3"> 来点我一下</List.Item>
    </List>
  ), addWithInfoOptions)
  .addWithInfo('前缀图标', () => (
    <List>
      <List.Item key="1" prefix={<Avatar />}>Avatar的前置图标</List.Item>
      <List.Item
        key="2"
        prefix={<Avatar src="http://7xr8fr.com1.z0.glb.clouddn.com/IMG_2197.JPG"/>}
      >
        Avatar用户传入图片
      </List.Item>
      <List.Item
        key="3"
        prefix={<Avatar>OK</Avatar>}
      >
        Avatar自定义中间元素
      </List.Item>
      <List.Item
        key="4"
        prefix={<Avatar radius={false}>中国</Avatar>}
      >
        我是方形的前置元素
      </List.Item>
    </List>
  ), addWithInfoOptions)
  .addWithInfo('后缀图标', () => (
    <List>
      <List.Item key="1" suffix={suffix}> Avatar用户传入图片</List.Item>
      <List.Item key="2" suffix={suffix}> Avatar用户传入图片</List.Item>
      <List.Item key="3" suffix={suffix}> Avatar用户传入图片</List.Item>
      <List.Item key="4" suffix={suffix}> Avatar用户传入图片</List.Item>
      <List.Item key="5" suffix={suffix}> Avatar用户传入图片</List.Item>
    </List>
  ), addWithInfoOptions)