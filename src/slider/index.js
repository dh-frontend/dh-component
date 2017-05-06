import React from 'react';
import PropTypes from 'prop-types';
import RcSlider from 'react-slick';
class Slider extends React.Component {
  static defaultProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  constructor(props) {
    super(props);
    this.slickNext = this.slickNext.bind(this);
  }
  render() {
    return (
      <RcSlider
        ref={s => this.slick === s}
        {...this.props}>
        { this.props.children }
      </RcSlider>
    );
  }
}
export default Slider;