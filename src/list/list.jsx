import React from 'react';
import PropTypes from 'prop-types';
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
    animation: PropTypes.bool,
    forbid: PropTypes.bool, // 禁用子元素的点击
    selectedKeys: PropTypes.arrayOf(PropTypes.string)
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
    this.handleChange = this.handleChange.bind(this);
  }
  // componentWillMount() {
  //   if (this.props.defaultKeys) {
  //     const defaultKeys = this.props.defaultKeys;
  //     this.state.selectedRowKeys = Array.isArray(defaultKeys) ? defaultKeys : [defaultKeys];
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (JSON.stringify(nextProps.defaultKeys) !== JSON.stringify(this.props.defaultKeys)) {
  //     const defaultKeys = nextProps.defaultKeys;
  //     this.state.selectedRowKeys = Array.isArray(defaultKeys) ? defaultKeys : [defaultKeys];
  //   }
  // }
  getChildContext() {
    const forbid = ['only', 'multiple'].indexOf(this.props.mode) !== -1 ? true : false;
    return {
      animation: this.props.animation,
      selectedKeys: this.state.selectedRowKeys,
      forbid
    };
  }
  handleChange(key, selected) {
    const { multiple, mode, immutable } = this.props;
    const { selectedRowKeys } = this.state;
    let _selectedRowKeys = [];
    if (typeof mode === 'string' && mode === 'only')  {
      // immutable -- only 模式下的可变性 
      if (typeof immutable === 'boolean' && immutable) {
        _selectedRowKeys = [key];
      } else {
        _selectedRowKeys = selected ? [key] : [];
      }
    }
    this.setState({ selectedRowKeys: _selectedRowKeys})
  }
  // handleChange(selected, eventKey) {
  //   const { multiple, mode, immutable } = this.props;
  //   if (is.not.boolean(mode)) {
  //     let selectedRowKeys = this.state.selectedRowKeys;
  //     if ( mode === 'multiple' || is.boolean(multiple) && multiple) {
  //       selectedRowKeys = selected ? Array.from(new Set([...selectedRowKeys, eventKey])) 
  //       : selectedRowKeys.filter(srk => srk !== eventKey);
  //     } else if (mode === 'only') {
  //       if (is.boolean(immutable) && immutable) {
  //          selectedRowKeys = [eventKey];
  //       } else {
  //         selectedRowKeys = selected ? [eventKey] : [];
  //       }
  //     }
  //       this.setState({ selectedRowKeys });
  //     if (this.props.onChange) {
  //       const record = mode === 'only' ? selectedRowKeys[0] : selectedRowKeys;
  //       this.props.onChange(record)
  //     }
  //   }
  // }
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
          React.Children.map(children,
           (child, idx) => {
              const props = {
                ...child.props,
                onChange: this.handleChange,
                eventKey: child.key,
                selectedKeys: selectedRowKeys
              };
            return {...child, props};
          })
        }
      </ul>
    )
  }
}
export default List;
