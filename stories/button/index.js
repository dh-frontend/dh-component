import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';
import buttonReadme from './button.md';
import { Button, Modal } from '../../src';
const options = {
  inline: true, propTables: false
}

storiesOf('按钮', module)
  .addDecorator(withReadme(buttonReadme))
  .addWithInfo(
    '按钮样式',
    () => (
      <div>
        <div style={{marginBottom: '16px'}}>
          <Button type="default" onClick={action('clicked')}>default</Button>
          <Button type="primary" onClick={action('clicked')}>primary</Button>
          <Button type="success" onClick={action('clicked')}>success</Button>
          <Button type="info" onClick={action('clicked')}>info</Button>
          <Button type="warning" onClick={action('clicked')}>warning</Button>
          <Button type="danger" onClick={action('clicked')}>danger</Button>
          <Button type="success" disabled onClick={action('clicked')}>danger</Button>
          <Button type="warning" size="small" onClick={action('clicked')}>small</Button>
        </div>
        <div>
          <Button type="success" data-role="checked" onClick={action('clicked')}>success checked</Button>
          <Button type="info" data-role="checked" onClick={action('clicked')}>info checked</Button>
          <Button type="warning" data-role="checked" onClick={action('clicked')}>warning checked</Button>
        </div>
      </div>
  ), options)
