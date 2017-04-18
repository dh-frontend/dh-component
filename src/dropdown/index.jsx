import React from 'react';
import RcDropdown from 'rc-dropdown';
import Icon from '../icon';

class Dropdown extends React.Component {
    static defaultProps = {
      trigger: 'click'
    };
    static propsTypes = {
      trigger: React.PropTypes.oneOf(['hover', 'click']),
      overlay: React.PropTypes.element,
      visible: React.PropTypes.bool,
      onVisibleChange: React.PropTypes.func
    }
    render() {
      const { trigger, overlay, children,  ...otherProps } = this.props;
        return (
            <RcDropdown
              {...otherProps}
              trigger={[trigger]}
              overlay={overlay}
              placement="bottomCenter"
              prefixCls="dh-dropdown"
            >
              {children}
            </RcDropdown>
        )
    }
}

export default Dropdown;
