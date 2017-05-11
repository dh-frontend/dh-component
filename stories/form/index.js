import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';


import InputDemo from './input';
import FormDemo from './form';
import inputReadme from './input.md';
const addWithInfoOptions = { inline: true, propTables: false,  source: false};
storiesOf('表单组件', module)
  .addDecorator(withReadme(inputReadme))
  .addWithInfo(
    'Input', 
    () => (<InputDemo />), addWithInfoOptions)
  .addWithInfo(
    'Form', 
    () => (<FormDemo />), addWithInfoOptions)
