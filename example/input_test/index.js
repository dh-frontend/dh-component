import React from 'react';
import Markdown from '../home/Markdown';

import { Input, Form } from '../../src';
import md from './Input.md';
class InputTest extends React.Component {
  render() {
    return (
      <div>
        <Input placeholder="请输入内容"/>
        <Input.Number placeholder="请输入内容" />
        <div>
          <h2>表单组件的开发测试</h2>
          <Form inline>
            <Form.Item label="Phone Number">
              <Input />
            </Form.Item>
          </Form>
        </div>
        <Markdown content={md}/>
      </div>
    )
  }
}
export default InputTest;
