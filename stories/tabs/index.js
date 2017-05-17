import React from 'react';
import { Button, Tabs } from '../../src';

import { storiesOf, action, linkTo } from '@kadira/storybook';
const options = {
  inline: true
}
storiesOf('选项卡', module)
  .addWithInfo(
    '默认', 
    () => (
    <Tabs defaultActiveKey="1" type="diamond">
      <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
      <Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</Tabs.TabPane>
    </Tabs>
  ), options)
