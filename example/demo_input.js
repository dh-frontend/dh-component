import React from 'react';
import Mark from './component/mark';

import { Input, Form } from '../src';
import docInput from '../doc/input.md';

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
        <Mark content={docInput}/>
      </div>
    )
  }
}
export default InputTest;
