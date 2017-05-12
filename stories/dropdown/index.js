import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { Dropdown, Menu, Button } from '../../src';
import withReadme from 'storybook-readme/with-readme';
const options = {
  inline: true
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
  </Menu>
);

storiesOf('下拉菜单', module)
  .addWithInfo('默认列表', () => (
   <Dropdown placement="bottomLeft" overlay={menu}>
     <Button>下拉菜单</Button>
    </Dropdown>
  ), options)
