import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListItem from './item';
class List extends React.Component {
  static propsTypes = {
    defaultKey: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    mode: PropTypes.oneOf(['multiple', 'combobox']),
    trigger: PropTypes.bool,
    onChange: PropTypes.func,
    
  }
  static childContextTypes = {
    onChange: PropTypes.func,
    trigger: PropTypes.bool
  }
  static defaultProps = {
    trigger: true,
    mode: 'combobox'
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: []
    };
  }
  getChildContext() {
    const trigger = this.props.trigger;
    const onChange = (selected, eventKey) => { 
      this.handleChange(selected, eventKey);
    };
    return {
      trigger,
      onChange
    }
  }
  handleChange(selected, eventKey) {
    const { mode } = this.props;
    let selectedRowKeys = this.state.selectedRowKeys;
    if (mode === 'multiple') {
      selectedRowKeys = selected ? Array.from(new Set([...selectedRowKeys, eventKey])) 
      : selectedRowKeys.filter(srk => srk !== eventKey);
    } else if ( mode === 'combobox') {
      selectedRowKeys = selected ? [eventKey] : [];
    }
    this.setState({ selectedRowKeys });
    if (this.props.onChange) {
      this.props.onChange(selectedRowKeys)
    }
    
  }
  render() {
    const { children,  trigger} = this.props;
    const { selectedRowKeys } = this.state;
       
    return (
      <ul className="dh-list dh-list-borderd">
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
