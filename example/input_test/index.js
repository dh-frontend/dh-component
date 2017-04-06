import React from 'react';
import { Input, Number } from '../../src';
class InputTest extends React.Component {
  render() {
    console.log(Number)
    return (
      <div>
        <Input addonBefore="测试一下" addonAfter="好"/>
        <Number/>
      </div>
    )
  }
}
export default InputTest;