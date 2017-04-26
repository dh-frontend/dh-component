import React from 'react';
import Mark from './component/mark';
import { Radio } from '../src';

import docRadio from '../doc/radio.md';
class RadioTest extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnChange(checked) {
    console.log('handleOnChange', checked);
  }

  render() {
    return (
      <div className="test-radio">
        <Radio.Group onChange={this.handleOnChange}>
          <Radio>单选框1</Radio>
          <Radio>单选框2</Radio>
          <Radio>单选框3</Radio>
        </Radio.Group>

        <doc content={docRadio}/>
      </div>
    )
  }
}
export default RadioTest;
