import React from 'react';
import PropTypes from 'prop-types';
import is from 'is_js';
import classNames from 'classnames';
import ListItem from './item';
class List extends React.Component {
  static Item = ListItem

  static propsTypes = {
    defaultKeys: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    mode: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['only', 'multiple']), //新的模式
    ]),
    multiple: PropTypes.bool, // 多选模式开启 旧模式
    immutable: PropTypes.bool, // only模式下的可变性
    animation: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
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
    mode: false,
    multiple: false,
    immutable: false,
    animation: true,
    icon: false,
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
  getChildContext() {
    return {
      icon: this.props.icon,
      animation: this.props.animation,
      onClick: (selected, eventKey) => {
        this.handleChange(selected, eventKey);
      }
    };
  }
  handleChange(selected, eventKey) {
    const { multiple, mode, immutable } = this.props;
    if (is.not.boolean(mode)) {
      let selectedRowKeys = this.state.selectedRowKeys;
      if ( mode === 'multiple' || is.boolean(multiple) && multiple) {
        selectedRowKeys = selected ? Array.from(new Set([...selectedRowKeys, eventKey])) 
        : selectedRowKeys.filter(srk => srk !== eventKey);
      } else if (mode === 'only') {
        if (is.boolean(immutable) && immutable) {
           selectedRowKeys = [eventKey];
        } else {
          selectedRowKeys = selected ? [eventKey] : [];
        }
      }
        this.setState({ selectedRowKeys });
      if (this.props.onChange) {
        const record = mode === 'only' ? selectedRowKeys[0] : selectedRowKeys;
        this.props.onChange(record)
      }
    }
  }
  render() {
    const { children, bordered, shadow, className, style } = this.props;
    const { selectedRowKeys } = this.state;
    return (
      <ul 
        style={style}
        className={
          classNames('dh-list', {
            'dh-list-borderd': bordered,
            [className]: className
          })
        }
      >
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
export default List;
