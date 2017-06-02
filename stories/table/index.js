import React from 'react';
import { storiesOf, action, linkTo, Icon } from '@kadira/storybook';

import TableDemo from './table.jsx';
import withReadme from 'storybook-readme/with-readme';
import tableReadme from './table.md';

storiesOf('表格组件', module)
  .addDecorator(withReadme(tableReadme))
  .addWithInfo('默认表格', () => (
    <TableDemo />
  ), { inline: true })
