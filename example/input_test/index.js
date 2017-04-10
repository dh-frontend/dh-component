import React from 'react';
import { Input, Number } from '../../src';
class InputTest extends React.Component {
  render() {
    console.log(Number)
    return (
      <div>
        <Input searched placeholder="请输入内容"/>
        <Number placeholder="请输入内容"/>
      </div>
    )
  }
}
export default InputTest;
