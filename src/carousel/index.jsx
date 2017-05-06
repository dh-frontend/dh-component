import React from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }
   carouselNext() {
    this.refs.slick.slickNext();
  }
  carouselPrev() {
    this.refs.slick.slickPrev();
  }
  carouselGo(number) {
    this.refs.slick.slickGoTo(number)
  }
  render() {
    const me = this;
    const {children, ...props } = me.props;
    return (
      <div className="dh-carousel">
        <Slick  {...props} ref="slick">
          { children }
        </Slick>
      </div>
    );
  }
}
export default Carousel;