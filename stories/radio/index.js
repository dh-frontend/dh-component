import React from 'react';
import { Radio } from '../../src';

import { storiesOf, action, linkTo } from '@kadira/storybook';
const options = {
  inline: true
}
storiesOf('单选框', module)
  .addWithInfo(
    '单选框1',
    () => (
      <Radio.Group defaultSelectKey="b" onChange={(key) => console.log('select =', key)}>
        <Radio key="a">选项1</Radio>
        <Radio key="b">选项2</Radio>
        <Radio key="c">选项3</Radio>
        <Radio key="d">选项4</Radio>
      </Radio.Group>
  ), options)
  .addWithInfo(
  '单选框2',
  () => (
    <div>
      <Radio key="a" checked onChange={(key) => console.log('select =', key)}>选项1(checked=true)</Radio>
      <Radio key="b" checked={false}>选项2(checked=false)</Radio>
      <Radio key="c" onChange={(key) => console.log('select =', key)}>选项3</Radio>
      <Radio key="d">选项4</Radio>
    </div>
  ), options);
