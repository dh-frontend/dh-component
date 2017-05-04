import React from 'react';
import PropTypes from 'prop-types';
import RcSlider from 'react-slick';
class Slick extends React.Component {
  static defaultProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RcSlider {...this.props}>
        { this.props.children }
      </RcSlider>
    );
  }
}
export default Slick;