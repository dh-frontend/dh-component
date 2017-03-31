import React, { Component, PropTypes } from 'react';
import Checkbox from 'antd/lib/checkbox';

class Table extends Component {
  static propTypes = {
    dataSource: PropTypes.array,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.element
        ]),
        dataIndex: PropTypes.string,
        render: PropTypes.function,
      })
    ),
    size: PropTypes.oneOf(['default', 'small', 'large']),
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    rowSelection: PropTypes.object
  }

  static defaultProps = {
    size: 'default',
    columns: [],
    dataSource: []
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedIdx: []
    };

    this.onClickSelect = this.onClickSelect.bind(this);
  }

  onClickSelectAll(e) {
    const {
      dataSource,
      rowSelection: {
        onSelectAll = function(){}
      }
    } = this.props;

    const checked = e.target.checked;
    let selectedIdx = [];
    if (checked) {
      selectedIdx = dataSource.map((d, i) => i);
    }
    this.setState({
      selectedIdx
    });
    onSelectAll(checked, checked ? dataSource : [])
  }

  onClickSelect(e, idx) {
    const {
      dataSource,
      rowSelection: {
        onSelect = function(){}
      }
    } = this.props;
    const { selectedIdx } = this.state;

    const p = selectedIdx.indexOf(idx);
    if (p > -1) {
      selectedIdx.splice(p, 1);
    } else {
      selectedIdx.push(idx);
    }
    this.setState({
      selectedIdx
    });
    onSelect(dataSource[idx], e.target.checked, dataSource.filter((d, i) => selectedIdx.indexOf(i) > -1))
  }

  render() {
    const { columns, dataSource, size, bordered, striped, rowSelection } = this.props;
    const { selectedIdx } = this.state;

    return (
      <div className={`dh-table dh-table-${size} ${bordered ? 'dh-table-bordered' : ''} ${striped ? 'dh-table-striped' : ''}`}>
        <table cellSpacing="0">
          <thead>
          <tr>
            {rowSelection && (
              <th>
                <Checkbox onChange={this.onClickSelectAll.bind(this)}/>
              </th>
            )}
            {columns.map(d => (
              <th key={d.dataIndex} style={{width: d.width || 'auto'}}>{d.title}</th>
            ))}
          </tr>
          </thead>

          <tbody>
          {dataSource.map((d, i) => (
            <tr key={i}>
              {rowSelection && (
                <td>
                  <Checkbox checked={selectedIdx.indexOf(i) > -1} onChange={(e) => this.onClickSelect(e, i)}/>
                </td>
              )}
              {columns.map(c => (
                <td key={c.dataIndex}>
                  {c.render ? c.render(d[c.dataIndex], d, i) : (d[c.dataIndex] || '(空白)')}
                </td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;