import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../icon';
class Avatar extends React.Component {
  static defaultProps = {
    icon: 'picture',
    radius: true
  }
  static propsTypes = {
    size: PropTypes.number,
    src: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    backgroundColor: PropTypes.string
  }

  constructor(props) {
    super(props);
  }
  renderChildren() {
    const { src, icon, children} = this.props;
    if (children) {
      return children;
    } else if (src && typeof src === 'string') {
      return (<img src={src} />);
    } else if (icon && typeof icon === 'string') {
      return (<Icon type={icon}/>);
    } else {
      return <Icon type="destroy"/>
    }
  }
  render() {
    const { backgroundColor, size, fontSize, color, radius} = this.props;
    return (
      <div
        style={{
          width: size,
          height: size,
          fontSize,
          backgroundColor,
          color
        }}
        className={classNames('dh-avatar', {
          'dh-avatar-radius': radius && typeof radius === 'boolean'
        })}>
        { this.renderChildren()}
      </div>
    )
  }
}
export default Avatar;
