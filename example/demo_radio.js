import React from 'react';
import Mark from './component/mark';
import { Radio, Button } from '../src';
import Slider from 'react-slick';
import docRadio from '../doc/radio.md';
class RadioTest extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.slider.slickNext();
    console.log('name is wjb', this.slider)
  }
  handleOnChange(checked) {
    console.log('handleOnChange', checked);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="test-radio">
        <Radio.Group onChange={this.handleOnChange}>
          <Radio>单选框1</Radio>
          <Radio>单选框2</Radio>
          <Radio>单选框3</Radio>
        </Radio.Group>
        <Button onClick={this.handleClick}>下一个</Button>
        <div className="test-slick">
          <Slider ref={c => this.slider = c}>
              <div className="test-item" key={1}><h3>1</h3></div>
              <div className="test-item" key={2}><h3>2</h3></div>
              <div className="test-item" key={3}><h3>3</h3></div>
              <div className="test-item" key={4}><h3>4</h3></div>
          </Slider>
        </div>
        <doc content={docRadio}/>
      </div>
    )
  }
}
export default RadioTest;
