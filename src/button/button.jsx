import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';
import classNames from 'classnames';

class Button extends React.Component {
  static defaultProps = {
    htmlType: 'button'
  }
  static propTypes = {
    htmlType: PropTypes.oneOf(['button', 'submit']),
    type: PropTypes.oneOf(['default','success','primary','info','warning','danger']),
    size: PropTypes.oneOf(['default', 'small']),
    shape: PropTypes.oneOf(['circle']),
    icon: PropTypes.string,
    onClick: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const checked = !this.state.checked;
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    this.setState({ checked });
  }

  render() {
    const { htmlType, type, disabled, size, shape, icon, ...others } = this.props;
    return (
      <button
        className={classNames('dh-btn', {
          [`dh-btn-${type}`]: type,
          [`dh-btn-${size}`]: size,
          [`dh-btn-${shape}`]: shape
        })}
        disabled={disabled}
        onClick={this.handleClick}
        data-role={ this.state.checked ? "checked" : null}
        {...others}
        type={htmlType}
      >
      {
        !shape && icon ? (<Icon type={icon} />) : null
      }
      {
        shape ? (<Icon type={icon} />) : (<span>{this.props.children}</span>)
      }
      </button>
    )
  }
}
export default Button;
