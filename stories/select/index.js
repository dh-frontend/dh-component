import React from 'react';
import { Select } from '../../src';
const Option = Select.Option;

import { storiesOf, action, linkTo } from '@kadira/storybook';
const options = {
  inline: true, propTables: false
}
storiesOf('Select 选择器', module)
  .addWithInfo(
    '选择器',
    () => (
      <div style={{marginLeft: '30px'}}>
        <Select defaultValue="lucy" style={{ width: 120 }}>
           <Option value="jack">Jack</Option>
           <Option value="lucy">Lucy</Option>
           <Option value="disabled" disabled>Disabled</Option>
           <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
  ), options);
