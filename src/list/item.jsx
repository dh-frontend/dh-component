import React from 'react';
import Radio from '../radio';
import { Menu, Dropdown, Icon } from '../index.js';
class ListItem extends React.Component {
  static propTypes = {
    radio: React.PropTypes.bool,
    eventKey: React.PropTypes.string,
    rowSelected: React.PropTypes.bool,
    addonAvatar: React.PropTypes.element,
    rowSelection: React.PropTypes.shape({
      type: React.PropTypes.oneOf(['radio', 'dropdown']),
      resource: React.PropTypes.arrayOf(React.PropTypes.string)
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.state.checked = nextProps.checked;
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
    if (this.props.onClick) {
      this.props.onChange(checked, this.props.eventKey);
    }
  }
  renderAfter(cellProps) {
    if (this.props.rowSelection && rowSelection.type === 'radio') {
      return (<Radio {...cellProps} defaultValue={this.state.checked}/>)
    } else {
      const menus = this.renderMenu();
      return (
        <Dropdown overlay={menus} trigger="hover">
           <span><Icon type="list-circle"/></span>
        </Dropdown>
      )
    }
  }
  renderMenu() {
    return (
      <Menu>
          <Menu.Item>
              <span>选项一</span>
          </Menu.Item>
          <Menu.Item>
              <span>选项二</span>
          </Menu.Item>
          <Menu.Item>
              <span>选项三</span>
          </Menu.Item>
      </Menu>
    );
  }
  render() {
    const { checked, eventKey, addonAvatar, rowSelected, rowSelection} = this.props;
    const style = {
      transform: this.state.checked ? 'scaleY(1)':' scaleY(0)'
    };
    let [rowProps, cellProps] = [{
        onClick: this.handleClick
      }, {
        onChange: this.handleChange
    }];
    if (rowSelected && typeof rowSelected  === 'boolean') {
      cellProps = { };
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
            {/* { this.renderAfter(cellProps)} */}
            <Radio {...cellProps} defaultValue={this.state.checked}/>
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
