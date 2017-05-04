import React from 'react';
import Mark from './component/mark';
import { Radio, Slick } from '../src';

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
        <div className="test-slick">
          <Slick>
              <div className="test-item"><h3>1</h3></div>
              <div className="test-item"><h3>2</h3></div>
              <div className="test-item"><h3>3</h3></div>
              <div className="test-item"><h3>4</h3></div>
          </Slick>
        </div>
        <doc content={docRadio}/>
      </div>
    )
  }
}
export default RadioTest;
