import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';
import spinReadme from './spin.md';
import SpinDemo from './spin.jsx';
const options = {
  inline: true, propTables: false
}


storiesOf('spin 加载中', module)
  .addDecorator(withReadme(spinReadme))
  .addWithInfo(
    '默认样式',
    () => (
    <SpinDemo />
  ), options)
