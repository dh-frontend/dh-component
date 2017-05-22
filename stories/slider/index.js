import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';
import sliderReadme from './slider.md';
import { Slider, Dropdown, Icon, Menu } from '../../src';
const options = {
  inline: true, propTables: false
}
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);
const element = (
  <div style={{with: '100px', height: '50px'}}>
    <p>tooltip标题</p>
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        点击 <Icon type="down" />
      </a>
    </Dropdown>
  </div>
)

storiesOf('滑动输入条', module)
  .addDecorator(withReadme(sliderReadme))
  .addWithInfo(
    '默认样式',
    () => (
      <div>
        <Slider trigger={['click']} onChange={(value) => {console.log(value)}} overlay={element} range defaultValue={[20, 50]} />
        <br/>
        <br/>
        <Slider  defaultValue={30} />
      </div>
  ), options)
