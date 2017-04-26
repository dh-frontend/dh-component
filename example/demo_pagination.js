import React from 'react';
import Mark from './component/mark';

import { Pagination } from '../src';
import docPagination from '../doc/pagination.md';

class PaginationTest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="test-pagination">
        <Pagination total={50} />
        <Pagination total={500} />

        <doc content={docPagination}/>
      </div>
    )
  }
}
export default PaginationTest;
