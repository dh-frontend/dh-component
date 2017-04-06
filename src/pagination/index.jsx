import React, { Component, PropTypes } from 'react';
import RcPagination from 'rc-pagination';

import Icon from '../icon';

class Pagination extends Component {
  static propTypes = {
    defaultCurrent: PropTypes.number,
    current: PropTypes.number,
    total: PropTypes.number,
    defaultPageSize: PropTypes.number,
    pageSize: PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    defaultCurrent: 1,
    total: 0,
    defaultPageSize: 10,
    pageSize: 10,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <RcPagination
        prefixCls="dh-pagination"
        {...this.props}
      />
    )
  }
}

export default Pagination;