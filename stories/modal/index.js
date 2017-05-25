import React from 'react';
import createClass from 'create-react-class';
import withReadme from 'storybook-readme/with-readme';

import ModalDemo from './modal';
import ModalReadme from './modal.md';

import { storiesOf, action, linkTo } from '@kadira/storybook';
const addWithInfoOptions = { inline: true, propTables: false };
storiesOf('模态框', module)
  .addDecorator(withReadme(ModalReadme))
  .addWithInfo(
    '默认模态框',
    () => (
     <ModalDemo />
  ), addWithInfoOptions)
