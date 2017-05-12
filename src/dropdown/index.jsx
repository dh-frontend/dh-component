import React from 'react';
import PropTypes from 'prop-types';

import RcDropdown from 'rc-dropdown';
import Icon from '../icon';

class Dropdown extends React.Component {
    static defaultProps = {
      trigger: 'click'
    };
    static propsTypes = {
      trigger: PropTypes.oneOf(['hover', 'click']),
      overlay: PropTypes.element,
      visible: PropTypes.bool,
      onVisibleChange: PropTypes.func
    }
    render() {
      const { trigger, overlay, children,  ...otherProps } = this.props;
        return (
            <RcDropdown
              {...otherProps}
              trigger={[trigger]}
              overlay={overlay}
              prefixCls="dh-dropdown"
            >
              {children}
            </RcDropdown>
        )
    }
}

export default Dropdown;
