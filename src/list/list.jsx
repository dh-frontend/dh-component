import React from 'react';
import classNames from 'classnames';
import ListItem from './item';
class List extends React.Component {
  static defaultProps = {
    multiple: false,
    rowSelected: true,
    theme: 'large'
  }
  static propsTypes = {
    header: React.PropTypes.element,
    theme: React.PropTypes.oneOf['nomarl', 'large'],
    multiple: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    rowSelected: React.PropTypes.bool,
    rowSelection: React.PropTypes.shape({
      type: React.PropTypes.oneOf(['radio', 'dropdown']),
      onClick: React.PropTypes.func,
      options: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.shape({
          name: React.PropTypes.string,
          key: React.PropTypes.string
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
