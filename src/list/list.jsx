import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import ListItem from './item';
class List extends React.Component {
  static defaultProps = {
    multiple: false,
    rowSelected: true,
    theme: 'large'
  }
  static propsTypes = {
    header: PropTypes.element,
    theme: PropTypes.oneOf['nomarl', 'large'],
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    rowSelected: PropTypes.bool,
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
      dataIndexs: []
    };
  }

  handleChange(checked, current, idx) {
    let dataIndexs = this.state.dataIndexs;
    if (typeof this.props.multiple === 'boolean' && !this.props.multiple) {
      dataIndexs = checked ? Array.from(new Set([...dataIndexs, current]))
        : dataIndexs.filter(d => d !== current);
    } else {
      dataIndexs = checked ? [current] : [];
    }
    this.setState({ dataIndexs });
    if (this.props.onChange) {
      this.props.onChange(checked, current, idx);
    }
  }
  render() {
    const { children, theme, rowSelected, rowSelection } = this.props;
    const { dataIndexs } = this.state;

    return (
      <div
        className={classNames('dh-list', {
          'dh-list-large': theme === 'large'
      })}
      >
      { this.props.header || null }
        <div className="dh-list-warp">
          <ul >
            {
              React.Children.map(children, (item, idx) => {
                const props = {
                  ...item.props,
                  rowSelection,
                  rowSelected,
                  checked: dataIndexs.find(d => d === item.key || d === idx) ? true : false,
                  eventKey: item.key || idx,
                  onChange: (checked, dataIndex) => { this.handleChange(checked, dataIndex, idx) }
                }
                return {...item, props};
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
List.Item = ListItem;
export default List;
