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
const label = (
  <div>
    <p>起始日期</p>
    <span>2017.08.17</span>
  </div>
);
const marks1 = {
  10: {
    label: label
  },
  20: '20%',
  60: '60%',
};
const marks2 = {
  0: '0%',
  10: '10%',
  20: '20%',
  60: '60%',
  80: {
    style: {
      color: 'red'
    },
    label: <div>
      <p>起始日期</p>
      <span>2017.08.17</span>
    </div>
  }
};

storiesOf('Silder 滑动输入条', module)
  .addDecorator(withReadme(sliderReadme))
  .addWithInfo(
    '默认样式',
    () => (
      <div style={{padding: '16px'}}>
        <Slider allowCross={false}  trigger={['click']} onChange={(value) => {console.log(value)}} overlay={element} range={2} defaultValue={[20, 50]} />
        <br/>
        <br/>
        <Slider step={null} min={10}  marks={marks1}  defaultValue={30} />
        <br/>
        <br/>
        <Slider  step={null} max={80} reverse  marks={marks2}  defaultValue={10} />
      </div>
  ), options)
