import React from 'react';
import { Icon } from '../../src';
import IconList from './icon_list';
import { storiesOf, action, linkTo } from '@kadira/storybook';
const options = {
  inline: true,
  propTables: false,
  source: false
}
storiesOf('图标库', module)
  .addWithInfo(
    '图标库列表', 
    () => (
    <IconList />
  ), options)
