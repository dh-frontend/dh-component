import React from 'react';
import PropTypes from 'prop-types';
import RcSlider, { Range, Handle } from 'rc-slider';
import { Tooltip, Button } from '../index';
const RcRange = Range;
const RcHandle = Handle;


class Slider extends React.Component {
  static defaultProps = {
    prefixCls: 'dh-slider',
    tipFormatter: (value) => {
      return value.toString()
    }
  }
  constructor(props) {
    super(props);
  }

  renderHandle = (value) => {
    const { tipFormatter, overlay } = this.props;
    if (overlay) return overlay;
    return tipFormatter ? tipFormatter(value) : ''
  }

  renderPlacement = (index) => {
    if (index) return index == 0 ? "top" : "bottom";
    return 'top';
  }

  handleTooltip = ({ value, dragging, index, ...restProps }) => {
    const { trigger } = this.props;
     return (
       <Tooltip
         overlay={this.renderHandle(value)}
         placement={this.renderPlacement(index)}
         key={index}
         trigger={trigger}
       >
         <RcHandle
           {...restProps}
         />
       </Tooltip>
     );
  }
  render() {
    const { range, ...restProps } = this.props;
    if (range) {
      return <RcRange {...restProps} handle={this.handleTooltip} />
    }
    return <RcSlider {...restProps} handle={this.handleTooltip} />
  }
}

export default Slider;
