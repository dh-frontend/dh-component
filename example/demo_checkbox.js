import React from 'react';
import Mark from './component/mark';
import { Checkbox } from '../src';

import docCheckbox from '../doc/checkbox.md';

class CheckboxTest extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnChange(checked) {
    console.log('handleOnChange', checked);
  }

  render() {
    return (
      <div className="test-checkbox">
        <Checkbox.Group onChange={this.handleOnChange}>
          <Checkbox>复选框1</Checkbox>
          <Checkbox>复选框2</Checkbox>
          <Checkbox>复选框3</Checkbox>
        </Checkbox.Group>

        <Mark content={docCheckbox}/>
      </div>
    )
  }
}
export default CheckboxTest;
