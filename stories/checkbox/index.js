import React from 'react';
import { Checkbox } from '../../src';

import { storiesOf, action, linkTo } from '@kadira/storybook';
const options = {
  inline: true
}
storiesOf('复选框', module)
  .addWithInfo(
    '复选框1',
    () => (
      <Checkbox.Group defaultValue={['a', 'b']} onChange={(key) => console.log('select =', key)}>
        <Checkbox key="a">选项1</Checkbox>
        <Checkbox key="b">选项2</Checkbox>
        <Checkbox key="c">选项3</Checkbox>
        <Checkbox>选项4</Checkbox>
      </Checkbox.Group>
  ), options)
  .addWithInfo(
    '复选框2',
    () => (
      <div>
        <Checkbox key="a" checked onChange={(key) => console.log('select =', key)}>选项1(checked=true)</Checkbox>
        <Checkbox key="b" checked={false}>选项2(checked=false)</Checkbox>
        <Checkbox key="c" onChange={(key) => console.log('select =', key)}>选项3</Checkbox>
        <Checkbox key="d">选项4</Checkbox>
      </div>
  ), options);
