import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListItem from './item';
class List extends React.Component {
  static propsTypes = {
    defaultKeys: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    multiple: PropTypes.bool,
    animation: PropTypes.bool,
    onChange: PropTypes.func,
    bordered: PropTypes.bool,
    shadow: PropTypes.bool,
    icon: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]), // 子元素的后缀图标， 如果设置false 则不显示
  }
  static childContextTypes = {
    onClick: PropTypes.func,
    animation: PropTypes.bool,
    icon: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]), // 子元素的后缀图标， 如果设置false 则不显示
  }
  static defaultProps = {
    multiple: false,
    animation: true,
    icon: false,
    bordered: true
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: []
    };
  }
  componentWillMount() {
    if (this.props.defaultKeys) {
      const defaultKeys = this.props.defaultKeys;
      this.state.selectedRowKeys = Array.isArray(defaultKeys) ? defaultKeys : [defaultKeys];
    }
  }
  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.defaultKeys) !== JSON.stringify(this.props.defaultKeys)) {
      const defaultKeys = nextProps.defaultKeys;
      this.state.selectedRowKeys = Array.isArray(defaultKeys) ? defaultKeys : [defaultKeys];
    }
  }
  getChildContext() {;
    return {
      icon: this.props.icon,
      animation: this.props.animation,
      onClick: (selected, eventKey) => {
        this.handleChange(selected, eventKey);
      }
    }
  }
  handleChange(selected, eventKey) {
    const { multiple } = this.props;
    let selectedRowKeys = this.state.selectedRowKeys;
    if (typeof multiple === 'boolean' && multiple) {
      selectedRowKeys = selected ? Array.from(new Set([...selectedRowKeys, eventKey])) 
      : selectedRowKeys.filter(srk => srk !== eventKey);
    } else {
      selectedRowKeys = selected ? [eventKey] : [];
    }
    this.setState({ selectedRowKeys });
    if (this.props.onChange) {
      this.props.onChange(selectedRowKeys)
    }
  }
  render() {
    const { children, bordered, shadow } = this.props;
    const { selectedRowKeys } = this.state;
    return (
      <ul 
        className={
          classNames('dh-list', {
            'dh-list-borderd': bordered,
            'dh-list-shadow': shadow
          })
        }>
        {
          React.Children.map(children, (child, idx) => {
            const props = {
              ...child.props,
              eventKey: child.key || idx,
              selected: selectedRowKeys.find(srk => srk === child.key || srk === idx ) ? true : false,
            };
            return {...child, props};
          })
        }
      </ul>
    )
  }
}
List.Item = ListItem;
export default List;
