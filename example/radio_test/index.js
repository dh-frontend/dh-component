import React from 'react';
import Markdown from '../home/Markdown';

import { Radio } from '../../src';
import md from './readme.md';

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

        <Markdown content={md}/>
      </div>
    )
  }
}
export default RadioTest;
