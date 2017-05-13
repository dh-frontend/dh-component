import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import RcTabs from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

class Tabs extends React.Component {
  static defaultProps = Object.assign({}, RcTabs.defaultProps, {
    prefixCls: 'dh-tab',
    type: 'inline'
  });

  static propTypes = {
    type: PropTypes.oneOf(['line', 'diamond']),
    className: PropTypes.string,
    animated: PropTypes.bool
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { type, extraContent, onTabClick, animated, ...props } = this.props;
    return (
      <RcTabs
        {...props}
        className={classNames({
          [`dh-tab-${type}`]: type ? true : false,
          [props.classname]: !!props.className
        })}
        renderTabBar={() => (
          <ScrollableInkTabBar
            extraContent={extraContent}
            onTabClick={onTabClick}
          />
        )}
        renderTabContent={() => (<TabContent animated={animated} />)}
        tabBarPosition="top"
      />
    );
  }
}
Tabs.TabPane = RcTabs.TabPane;
export default Tabs;
