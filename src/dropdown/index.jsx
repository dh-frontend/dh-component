import React from 'react';
import RcDropdown from 'rc-dropdown';
import Icon from '../icon';

const prefixCls = 'dh-dropdown';

class Dropdown extends React.Component {
    static defaultProps = {
        prefixCls: 'dh-dropdown',
        mouseEnterDelay: 0.15,
        mouseLeaveDelay: 0.1,
        placement: 'bottomLeft',
        icon: 'down'
    };

    getChildrenElement() {
      const { children, title, icon } = this.props;
      if (!children) {
        return (
          <div className={`${prefixCls}-title`}>
              <span>{ title || '请选择' }</span>
              <Icon type={icon} />
          </div>
        )
      } else {
        return children;
      }
    }

    getTransitionName() {
        const { placement = '' } = this.props;
        if (placement.indexOf('top') >= 0) {
            return 'slide-down';
        }
        return 'slide-up';
    }

    render() {
        const dropdownTrigger = this.getChildrenElement();
        return (
            <RcDropdown transitionName={this.getTransitionName()}  {...this.props}>
              { dropdownTrigger }
            </RcDropdown>
        )
    }
}

export default Dropdown;
