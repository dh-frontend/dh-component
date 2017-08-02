import React from 'react';
import PropTypes from 'prop-types';

import RcMenu, { SubMenu, Item, Divider, ItemGroup } from 'rc-menu';
import classNames from 'classnames';
import Ani from 'css-animation';
const prefixCls = 'dh-menu';
class Menu extends React.Component {
  static SubMenu = SubMenu
  static Item = Item
  static Divider = Divider
  static ItemGroup = ItemGroup
  static defaultProps = {
    bordered: true
  }
  static propTypes = {
    bordered: PropTypes.bool
  }

  constructor(props) {
    super(props);
  }
  animate(node, show, done) {
    let height;
    return Ani(node, `${prefixCls}-collapse`, {
      start() {
        if (!show) {
          node.style.height = `${node.offsetHeight}px`;
          node.style.opacity = 0;
        } else {
          height = node.offsetHeight;
          node.style.height = 0;
          node.style.opacity = 1;
          // node.style.transform = 'translate(-10px, 0)';
        }
      },
      active() {
        node.style.height = `${show ? height : 0 }px`;
        // node.style.transform = `translate(${show ? '0' : '-10px'}, 0)`;
      },
      end() {
        node.style.height = '';
        done();
      },
    });
  }
  render() {
    const _this = this;
    const openAnimation = {
      enter(node, done) {
        return _this.animate(node, true, done);
      },
      appear(node, done) {
        return _this.animate(node, true, done);
      },
      leave(node, done) {
        return _this.animate(node, false, done);
      },
    };
    const props = this.props.mode === 'inline' ? {...this.props, openAnimation} : this.props;
    return (
      <RcMenu
        prefixCls={prefixCls}
        className={
          classNames({
            'dh-menu-border': props.bordered,
            'dh-menu-dark': props.theme === 'dark'
          })
        }
        {...props}
      />
    );
  }
}


export default Menu;
