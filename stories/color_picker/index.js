import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { Tooltip,  ColorPicker } from '../../src';
import withReadme from 'storybook-readme/with-readme';
const options = {
  inline: true
}
storiesOf('颜色选择', module)
  // .addDecorator(withReadme(listReadme))
  .addWithInfo('点选色彩', () => (
   <ColorPicker >
      <span style={{display: 'block'}}>点我</span>
    </ColorPicker>
  ), { inline: true })
  .addWithInfo('默认列表', () => (
      <ColorPicker.Panel/>
  ), { inline: true })
