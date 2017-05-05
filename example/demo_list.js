import React from 'react';
import Mark from './component/mark';
import { List, Avatar, Dropdown, Icon, Menu} from '../src';
import docList from '../doc/list.md';

class SelectTest extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
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
    return (
      <div className="test-list">
        {/*<div className="test-list-item">
          <h2>后缀自定义列表</h2>
          <List>
            <List.Item key="1" suffix={suffix}> 我是一个自定义后缀的列表 </List.Item>
            <List.Item key="2" suffix={suffix}> 我是一个自定义后缀的列表 </List.Item>
            <List.Item key="3" suffix={suffix}> 我是一个自定义后缀的列表 </List.Item>
          </List>
        </div>
        <div className="test-list-item">
          <h2>后缀图标列表回调</h2>
          <List>
            <List.Item 
              key="1" 
              onSuffixClick={(d) =>{ console.log(d)}}
            >
              点击后面的图标回调
            </List.Item>
            <List.Item 
              key="2" 
              onSuffixClick={(d) =>{ console.log(d)}}
            >
              点击后面的图标回调
            </List.Item>

          </List>
        </div>
        <div className="test-list-item">
          <h2>去掉过渡效果</h2>
          <List animation={false}>
            <List.Item key="1">我已经没有任何效果了</List.Item>
            <List.Item key="2">我已经没有任何效果了</List.Item>
            <List.Item key="3">我已经没有任何效果了</List.Item>
          </List>
        </div>
        <div className="test-list-item">
          <h2>多选列表并且带Icon</h2>
          <List multiple onChange={(eventKey) => { console.log(eventKey)}} icon>
            <List.Item key="1">我是多选择哦</List.Item>
            <List.Item key="2">我是多选择哦</List.Item>
            <List.Item key="3">我是多选择哦</List.Item>
            <List.Item key="4">我是多选择哦</List.Item>
            <List.Item key="5">我是多选择哦</List.Item>
          </List>
        </div>
        */}
        <div className="test-list-item">
          <h2>带前置插件图标的</h2>
          <List multiple defaultKeys={['1', '2', '3']}>
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
        </div>
        <Mark content={docList}/>
      </div>
    )
  }
}
export default SelectTest;
