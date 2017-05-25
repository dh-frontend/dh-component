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
    onClick: PropTypes.func,
    ghost: PropTypes.bool,
    className: PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const {
      htmlType,
      type,
      disabled,
      size,
      shape,
      ghost,
      icon,
      className,
      ...others } = this.props;
    return (
      <button
        className={classNames('dh-btn', {
          [`dh-btn-${type}`]: type,
          [`dh-btn-${size}`]: size,
          [`dh-btn-${shape}`]: shape,
          'dh-btn-background-ghost': ghost,
          [className]: className
        })}
        disabled={disabled}
        data-ghost={ghost}
        {...others}
        type={htmlType}
      >
        {
          icon && !shape ?
            (<span className="dh-btn-prefix"><Icon type={icon} /></span>)
             :
             null
        }
        {
          icon && shape ?
            (<span><Icon type={icon} /></span>)
            :
            (<span>{this.props.children}</span>)
        }


      </button>
    )
  }
}
export default Button;
