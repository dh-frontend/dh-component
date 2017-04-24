import React from 'react';
import Markdown from '../home/Markdown';
import md from './list.md';

import { List, Avatar } from '../../src';


class SelectTest extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="test-list">
        <div className="test-list-item">
          <h2>小列表</h2>
          <List
            theme="nomarl"
            onChange={() => { console.log(123)}}
            rowSelection={{
            type: 'radio',
            options: ['测试1', '测试2', '测试3'],
            onClick: (record) => { console.log("回调", record)}
          }}>
            <List.Item key="1">13123</List.Item>
            <List.Item key="2">13123</List.Item>
            <List.Item key="3">13123</List.Item>
            <List.Item key="4">13123</List.Item>
            <List.Item key="5">13123</List.Item>
          </List>
        </div>
        <div className="test-list-item">
          <h2>单选列表</h2>
          <List
            multiple
            rowSelection={{
            type: 'dropdown',
            options: [{name: 'test1', key: 'a'}, { name: 'test2', key: 'b'}],
            onClick: (record) => { console.log("回调", record)}
          }}>
            <List.Item key="1">13123</List.Item>
            <List.Item key="2">13123</List.Item>
            <List.Item key="3">13123</List.Item>
            <List.Item key="4">13123</List.Item>
            <List.Item key="5">13123</List.Item>
          </List>
        </div>
        <div className="test-list-item">
          <h2>点击整行时触发</h2>
          <List multiple rowSelected>
            <List.Item key="1">13123</List.Item>
            <List.Item key="2">13123</List.Item>
            <List.Item key="3">13123</List.Item>
            <List.Item key="4">13123</List.Item>
            <List.Item key="5">13123</List.Item>
          </List>
        </div>
        <div className="test-list-item">
          <h2>多选列表</h2>
          <List>
            <List.Item key="1">13123</List.Item>
            <List.Item key="2">13123</List.Item>
            <List.Item key="3">13123</List.Item>
            <List.Item key="4">13123</List.Item>
            <List.Item key="5">13123</List.Item>
          </List>
        </div>
        <div className="test-list-item">
          <h2>带前置插件图标的</h2>
          <List multiple>
            <List.Item key="1" addonAvatar={<Avatar />}>Avatar的前置图标</List.Item>
            <List.Item
              key="2"
              addonAvatar={<Avatar src="http://7xr8fr.com1.z0.glb.clouddn.com/IMG_2197.JPG"/>}
            >
              Avatar用户传入图片
            </List.Item>
            <List.Item
              key="3"
              addonAvatar={<Avatar>OK</Avatar>}
            >
              Avatar自定义中间元素
            </List.Item>
            <List.Item
              key="4"
              addonAvatar={<Avatar radius={false}>中国</Avatar>}
            >
              我是方形的前置元素
            </List.Item>
          </List>
        </div>
        <Markdown content={md}/>
      </div>
    )
  }
}
export default SelectTest;
