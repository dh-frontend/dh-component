import React from 'react';
import Markdown from '../home/Markdown';

import { Pagination } from '../../src';
import md from './readme.md';

class PaginationTest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="test-pagination">
        <Pagination total={50} />
        <Pagination total={500} />

        <Markdown content={md}/>
      </div>
    )
  }
}
export default PaginationTest;
