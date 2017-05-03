import React, { Component } from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import Checkbox from '../checkbox';

const SELECTION_WIDTH = 50;

class Table extends Component {
  static propTypes = {
    dataSource: PropTypes.array,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
        ]),
        dataIndex: PropTypes.string,
        render: PropTypes.function,
      })
    ),
    size: PropTypes.oneOf(['default', 'small', 'large']),
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    rowSelection: PropTypes.object,
    fixed: PropTypes.bool
  };

  static defaultProps = {
    size: 'default',
    striped: true,
    columns: [],
    dataSource: []
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIdx: [],
      columns: props.columns,
      fixedHeader: false
    };

    this.onClickSelect = this.onClickSelect.bind(this);
  }

  componentDidMount() {
    if (!this.props.fixed) {
      return;
    }
    let shouldUpdate = false;
    const columns = this.state.columns.map(d => {
      const width = this.refs['th-' + d.dataIndex].offsetWidth || 200;
      if (d.width !== width) {
        shouldUpdate = true;
      }
      return {...d, width};
    });

    if (shouldUpdate) {
      this.setState({
        fixedHeader: true,
        columns: columns
      });
    } else {
      if (!this.state.fixedHeader) {
        this.setState({
          fixedHeader: true
        })
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.columns !== this.props.columns) {
      this.setState({
        columns: nextProps.columns
      })
    }
  }

  componentWillUpdate() {
    if (this.props.fixed && this.state.fixedHeader) {
      this.setState({fixedHeader: false});
    }
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  onClickSelectAll(checked) {
    const {
      dataSource,
      rowSelection: {
        onSelectAll = function(){}
      }
    } = this.props;

    let selectedIdx = [];
    if (checked) {
      selectedIdx = dataSource.map((d, i) => i);
    }
    this.setState({
      selectedIdx
    });
    onSelectAll(checked, checked ? dataSource : [])
  }

  onClickSelect(checked, idx) {
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
    onSelect(dataSource[idx], checked, dataSource.filter((d, i) => selectedIdx.indexOf(i) > -1))
  }

  render() {
    const { dataSource, size, bordered, striped, rowSelection, fixed, ...props } = this.props;
    const { selectedIdx, columns, fixedHeader } = this.state;

    let tableStyle = {}, theadStyle = {}, tbodyStyle = {}, trStyle = {}, thStyle = {};

    if (fixed && fixedHeader) {
      const total = columns.map(d => d.width).reduce((a, b) => a + b) + (rowSelection ? SELECTION_WIDTH : 0);

      tableStyle = {
        width: total,
        display: 'block'
      };
      theadStyle = {
        width: total,
          position: 'absolute'
      };
      tbodyStyle = {
        width: total,
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'block',
        height: '100%',
      };

      //避免滚动条影响
      trStyle = {
        width: total,
        display: 'block'
      };

      thStyle = {
        display: 'block',
        float: 'left'
      };
    }

    return (
      <div
        {...props}
        className={classNames('dh-table', {
          [`dh-table-${size}`]: size,
          [`dh-table-bordered`]: bordered,
          [`dh-table-striped`]: striped,
          [`dh-table-fixed`]: fixed
        })}
      >
        <table
          cellSpacing="0"
          style={{
            ...tableStyle
          }}
        >
          <thead style={theadStyle}>
          <tr>
            {rowSelection && (
              <th
                style={{
                  ...thStyle,
                  width: SELECTION_WIDTH
                }}
              >
                <Checkbox onChange={this.onClickSelectAll.bind(this)}/>
              </th>
            )}
            {columns.map(d => (
              <th
                ref={`th-${d.dataIndex}`}
                key={d.dataIndex}
                style={{
                  ...thStyle,
                  width: d.width
                }}
              >
                {d.title}
              </th>
            ))}
          </tr>
          </thead>

          <tbody style={tbodyStyle}>
          {dataSource.map((d, i) => (
            <tr key={i} style={trStyle}>
              {rowSelection && (
                <td
                  style={{
                    ...thStyle,
                    width: SELECTION_WIDTH
                  }}
                >
                  <Checkbox checked={selectedIdx.indexOf(i) > -1} onChange={(checked) => this.onClickSelect(checked, i)}/>
                </td>
              )}
              {columns.map(c => (
                <td
                  className={classNames({
                    'an-table-col-frozen': c.frozen
                  })}
                  key={c.dataIndex}
                  style={{
                    ...thStyle,
                    width: c.width,
                  }}
                >
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
