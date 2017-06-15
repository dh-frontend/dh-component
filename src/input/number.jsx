import React from 'react';
import PropTypes from 'prop-types';
import  RcInputNumber from 'rc-input-number';
import { Icon } from '../index';
class Number extends React.Component {
  static propTypes = {
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.state = {
      focus: false
    }
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleFocus() {
    this.setState({ focus: true });
  }
  handleBlur(e) {
    this.setState({ focus: false });
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }
  render() {
    const { width } = this.props;
    const style = {
      transform: this.state.focus ? 'scaleX(1)':' scaleX(0)'
    };
    return (
      <div
        style={{ width }}
        className="dh-input">
        <RcInputNumber
          {...this.props}
          prefixCls="dh-input-number"
          upHandler={(<Icon type="up"/>)}
          downHandler={(<Icon type="down"/>)}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <div
          style={style}
          className="dh-input-bordered"
        />
      </div>
    )
  }
}
export default Number;
