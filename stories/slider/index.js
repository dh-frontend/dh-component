import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';
import sliderReadme from './slider.md';
import SliderDemo from './slider';
const options = {
  inline: true, propTables: false
}


storiesOf('Silder 滑动输入条', module)
  .addDecorator(withReadme(sliderReadme))
  .addWithInfo(
    '默认样式',
    () => (
    <SliderDemo />
  ), options)
