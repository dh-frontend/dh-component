import React from 'react';
import { Button, Carousel } from '../src';

import { storiesOf, action, linkTo } from '@kadira/storybook';
const addWithInfoOptions = { inline: true, propTables: false };
class CarouselDemo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPre = this.handleClickPre.bind(this);
  }
  handleClickPre() {
    this.refs.c.carouselPrev();
  }
  handleClickNext() {
    this.refs.c.carouselNext();
  }
  render() {
    return (
      <div>
      <Button onClick={this.handleClickPre}>上一个</Button>
        <Button onClick={this.handleClickNext}>下一个</Button>
        <div style={{ height: 300, }}>
          <Carousel ref="c">
              <div style={{background: '#364d79', textAlign: 'center', color: '#fff'}} key={1}><h3>1</h3></div>
              <div style={{background: '#364d79', textAlign: 'center', color: '#fff'}} key={2}><h3>2</h3></div>
              <div style={{background: '#364d79', textAlign: 'center', color: '#fff'}} key={3}><h3>3</h3></div>
              <div style={{background: '#364d79', textAlign: 'center', color: '#fff'}} key={4}><h3>4</h3></div>
          </Carousel>
        </div>
      </div>
    )
  }
}
storiesOf('跑马灯', module)
  .addWithInfo(
    '默认', 
    () => (<CarouselDemo />), addWithInfoOptions)
