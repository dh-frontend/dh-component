import React from 'react';
import { Radio } from '../../src';

import { storiesOf, action, linkTo } from '@kadira/storybook';
import MessageDemo from './message';
const options = {
  inline: true
}
storiesOf('Message 提示弹窗', module)
  .addWithInfo(
    '单选框1',
    () => (
    <MessageDemo />
  ), options);
