import React from 'react';
import Mark from './component/mark';

import { Input, Form, Select } from '../src';
import docInput from '../doc/input.md';

class InputTest extends React.Component {
  render() {
    return (
      <div>
        <Input placeholder="请输入内容"/>
        <Input.Number placeholder="请输入内容" />
        <div style={{ height: 100}}>
          <Select>
            <Select.Option value="jack1">测试1</Select.Option>
            <Select.Option value="jack2">测试2</Select.Option>
            <Select.Option value="jack3">测试3</Select.Option>
          </Select>
        </div>
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
