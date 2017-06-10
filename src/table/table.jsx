import React, { Component } from 'react';
import update from 'react/lib/update';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import Icon from '../icon';

const SELECTION_WIDTH = 48;
const EXT_WIDTH = 24;

import './table.scss';

const textWidth = (txt, style = {'font-size': '12px'}) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  Object.assign(text.style, style);
  svg.appendChild(text);
  document.body.appendChild(svg);

  text.textContent = txt;
  let len = text.getComputedTextLength();

  document.body.removeChild(svg);

  return len;
};

class Table extends Component {
  static propTypes = {
    dataSource: PropTypes.array,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
        ]),
        ext: PropTypes.element,
        dataIndex: PropTypes.string,
        render: PropTypes.func,
        sorter: PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.bool
        ])
      })
    ),
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['default', 'small', 'large']),
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    rowSelection: PropTypes.object,
    fixed: PropTypes.bool,
    sortIcon: PropTypes.string
  };

  static defaultProps = {
    size: 'default',
    striped: true,
    columns: [],
    dataSource: [],
    sortIcon: 'up',
    fixed: false
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIdx: [],
      columns: this.setWidth(props),
      fixedHeader: false,
      sorter: {},
      scrollLeft: 0
    };

    this.onClickSelect = this.onClickSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.columns !== this.props.columns) {
      this.setState({
        columns: this.setWidth(nextProps)
      })
    }
  }

  setWidth = ({ dataSource, columns }, calcData = false) => {
    const t = (new Date()).getTime();
    const newColumns = columns.map(c => {
      let width = textWidth(c.title, {fontSize: '14px'}) + 20;

      if (calcData) {
        let count = 0;
        width = dataSource.reduce((width, d) => {
          return Math.max(width, textWidth(this.render(c, d, count++)));
        }, width);
      }

      return {
        ...c,
        width
      }
    });

    console.log('*** time', (new Date()).getTime() - t);

    return newColumns;
  };

  onClickSelectAll(checked) {
    const {
      dataSource,
      rowSelection: {
        onSelectAll = function () {
        }
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
        onSelect = function () {
        }
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

  handleSortChange = (field, sort) => {
    this.setState(update(this.state, {
      sorter: {
        $merge: {
          [field]: this.state.sorter[field] == sort ? '' : sort
        }
      }
    }));
    if (this.props.onChange) {
      this.props.onChange(null, null, this.state.sorter);
    }
  };

  handleScroll = () => {
    this.refs.table.style.marginLeft = -this.refs.body.scrollLeft + 'px';
  };

  renderTd = (c, d, i) => {
    return c.render ? c.render(d[c.dataIndex], d, i) : (d[c.dataIndex] || '(空白)')
  };

  render() {
    const { dataSource, size, bordered, striped, rowSelection, fixed, sortIcon, ...props } = this.props;
    const { selectedIdx, columns, sorter } = this.state;

    const thead = (
      <thead>
      <tr>
        {rowSelection && (
          <th>
            <div
              style={{
                      width: SELECTION_WIDTH
                    }}
            >
              <Checkbox onChange={this.onClickSelectAll.bind(this)}/>
            </div>
          </th>
        )}
        {columns.map(d => (
          <th key={d.dataIndex}>
            <div style={{width: d.width}}>
              {d.title}&nbsp;&nbsp;
              {d.sorter && (
                <span className="dh-sort-icon" href="javascript:;">
                      <a className="dh-sort-icon-btn" role="up"
                         onClick={() => this.handleSortChange(d.dataIndex, 'asc')}>
                        <Icon type={sortIcon} role={sorter[d.dataIndex] == 'asc' ? 'active' : ''}/>
                      </a>
                      <a className="dh-sort-icon-btn" role="down"
                         onClick={() => this.handleSortChange(d.dataIndex, 'desc')}>
                        <Icon type={sortIcon} role={sorter[d.dataIndex] == 'desc' ? 'active' : ''}/>
                      </a>
                    </span>
              )}
              {d.ext && (
                <span style={{paddingLeft: 20}}>
                      <div className="dh-table-ext" style={{width: EXT_WIDTH}}>
                        {d.ext}
                      </div>
                    </span>
              )}
            </div>
          </th>
        ))}
      </tr>
      </thead>
    );

    return (
      <div
        {...props}
        className={classNames('dh-table', {
          [`dh-table-${size}`]: size,
          [`dh-table-bordered`]: bordered,
          [`dh-table-striped`]: striped,
          [`dh-table-fixed`]: true
        })}
      >
        <div
          className="dh-table-header"
        >
          <table cellSpacing="0" ref="table">
            {thead}
          </table>
        </div>

        <div className="dh-table-body">
          <div
            ref="body"
            className="dh-table-body-content"
            onWheel={this.handleScroll}
          >
            <table cellSpacing="0">
              {thead}

              <tbody>
              {dataSource.map((d, i) => (
                <tr key={i}>
                  {rowSelection && (
                    <td>
                      <div
                        style={{
                          width: SELECTION_WIDTH
                        }}
                      >
                        <Checkbox
                          checked={selectedIdx.indexOf(i) > -1}
                          onChange={(checked) => this.onClickSelect(checked, i)}
                        />
                      </div>
                    </td>
                  )}
                  {columns.map(c => (
                    <td
                      className={classNames({
                        'an-table-col-frozen': c.frozen
                      })}
                      key={c.dataIndex}
                    >
                      <div
                        style={{
                          width: c.width
                        }}
                      >
                        {this.renderTd(c, d, i)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Table;
