import React from 'react';
import PropTypes from 'prop-types';

import Radio from '../radio';
import { Menu, Dropdown, Icon } from '../index.js';

class ListItem extends React.Component {
  static defaultProps = {
    rowSelection: {
      type: 'radio'
    }
  }

  static propTypes = {
    eventKey: PropTypes.string,
    rowSelected: PropTypes.bool,
    addonAvatar: PropTypes.element,
    rowSelection: PropTypes.shape({
      type: PropTypes.oneOf(['radio', 'dropdown']),
      onClick: PropTypes.func,
      options: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          name: PropTypes.string,
          key: PropTypes.string
        })
      ])
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.state.checked = nextProps.checked;
    }
  }
  handleMenuItemClick(record) {
    const { rowSelection, eventKey } = this.props;
    if (rowSelection.onClick && typeof rowSelection.onClick === 'function') {
      //组合callback 的 record
      rowSelection.onClick({
        ...record,
        keyPath: [eventKey, record.keyPath[0]],
        keyParent: eventKey
      });
    }
  }
  handleChange(checked) {
    if (this.props.onChange) {
      this.props.onChange(checked, this.props.eventKey);
      this.setState({ checked })
    }
  }
  handleClick() {
    const checked = !this.state.checked
    this.setState({ checked });
    if (this.props.onChange) {
      this.props.onChange(checked, this.props.eventKey);
    }
  }
  /**
   * render 后缀元素
   */
  renderAfter(cellProps) {
    const { rowSelection } = this.props;
    if (rowSelection && rowSelection.type === 'radio') {
      return (<Radio {...cellProps} defaultValue={this.state.checked}/>)
    } else if (rowSelection && rowSelection.type === 'dropdown') {
      const menus = this.renderMenu(rowSelection.options);
      return (
        <Dropdown
          overlay={menus}
          trigger="hover"
        >
          <span><Icon type="list-circle"/></span>
        </Dropdown>
      )
    }
    return null;
  }
  renderMenu(options) {
    let elements = null;
    if (options && options instanceof Array) {
      elements = options.map((item, idx) => {
        return (
          <Menu.Item key={item.key || idx} >
            <span>{ item instanceof Object ? item.name : item }</span>
          </Menu.Item>
        )
      })
    }
    return (<Menu onClick={this.handleMenuItemClick}>{elements}</Menu>);
  }
  render() {
    const { checked, eventKey, addonAvatar, rowSelected } = this.props;
    const style = {
      transform: this.state.checked ? 'scaleY(1)':' scaleY(0)'
    };
    let [rowProps, cellProps] = [{
        onClick: this.handleClick
      }, {
        onChange: this.handleChange
    }];
    if (rowSelected && typeof rowSelected  === 'boolean') {
      cellProps = {};
    } else {
      rowProps = {};
    }
    return (
      <li
        className="dh-list-warp-item"
        data-checked={checked}
        {...rowProps}
      >
        <div className="dh-list-warp-inner">
          { addonAvatar ? (<span className="warp-inner-label">{addonAvatar}</span>) : null }
          <span className="warp-inner-content">{ this.props.children }</span>
          <span className="warp-inner-radio">
            { this.renderAfter(cellProps)}
          </span>
        </div>
        <div
          style={style}
          className="dh-list-warp-bordered"/>
      </li>
    )
  }
}
export default ListItem;
