import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { Tooltip,  Button } from '../../src';
import withReadme from 'storybook-readme/with-readme';
const options = {
  inline: true
}
storiesOf('提示信息', module)
  // .addDecorator(withReadme(listReadme))
  .addWithInfo('默认列表', () => (
   <Tooltip placement="topRight" overlay="提示文字">
      <Button>左上</Button>
    </Tooltip>
  ), { inline: true })