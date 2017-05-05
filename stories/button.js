import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Button, Modal } from '../src'
storiesOf('按钮', module)
  .add('with text', () => (
    <Button type="primary" onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
