import React from 'react';
import { Button, Modal } from '../../src';

import { storiesOf, action, linkTo } from '@kadira/storybook';
const options = {
  inline: true
}
storiesOf('按钮', module)
  .addWithInfo(
    '按钮样式', 
    () => (
    <Button type="primary" onClick={action('clicked')}>点击我</Button>
  ), options)
  .add('Icon', () => (
    <Button icon="setting"></Button>
  ));
