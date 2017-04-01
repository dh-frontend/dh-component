import React, { Component, PropTypes } from 'react';

import Icon from '../icon';

class Pagination extends Component {
  static propTypes = {
    total: PropTypes.number,
    defaultPageSize: PropTypes.number,
  }

  static defaultProps = {
    defaultPageSize: 10,
    itemCount: 10,
  }

  constructor(props) {
    super(props);
    this.state = {
      page: Math.ceil(props.total / props.defaultPageSize),
      current: props.defaultCurrent || 1
    };
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrev = this.onClickPrev.bind(this);
    this.onClickPage = this.onClickPage.bind(this);
  }

  onClickNext() {
    const { page, current } = this.state;
    if (current < page) {
      this.setState({
        current: this.state.current + 1
      })
    }
  }

  onClickPrev() {
    const { current } = this.state;
    if (current > 0) {
      this.setState({
        current: this.state.current - 1
      })
    }
  }

  onClickPage(page) {
    const { current } = this.state;
    if (page != current) {
      this.setState({
        current: page
      })
    }
  }

  render() {
    const { itemCount } = this.props;
    const { page, current } = this.state;
    let pageStart = 1;
    if (page > itemCount) {
      if (current < itemCount / 2) {
        pageStart = 1;
      } else {
        pageStart = current - Math.floor(itemCount / 2)
      }
    }

    const pages = Array.from(new Array(Math.min(page, itemCount)), (d, i) => i + pageStart);

    return (
      <div className="dh-pagination">
        <ul>
          <li onClick={this.onClickPrev}><Icon type="prev" /></li>
          {pages.map(d => (
            <li onClick={() => this.onClickPage(d)} key={d} className={current == d ? 'active' : ''}>{d}</li>
          ))}
          <li onClick={this.onClickNext}><Icon type="next" /></li>
        </ul>
      </div>
    )
  }
}

export default Pagination;