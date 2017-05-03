import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Radio from '../radio';
import { Menu, Dropdown, Icon } from '../index.js';

class ListItem extends React.Component {
  static contextTypes = {
    onChange: PropTypes.func,
    trigger: PropTypes.bool
  }
  static propTypes = {
    prefix: PropTypes.element,
    suffix: PropTypes.element,
    eventKey: PropTypes.string,
    onRowClick: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    // this.element = ReactDOM.findDOMNode(this);
    // this.staticEventManger();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      this.state.selected = nextProps.selected;
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.selected !== nextProps.selected
  }
  // staticEventManger() {
  //   if (this.refs.suffix) {
  //     const nodes = this.refs.suffix.childNodes;
  //     nodes.forEach(itemNode => {
  //       itemNode.addEventListener('click', () => {
  //         this.element.addEventListener('click', (e) => {
  //           e.preventDefault();
  //         })
  //       })
  //     });
  //   }
  // }
  handleClick() {
    const selected = !this.state.selected;
    const eventKey = this.props.eventKey;
    if (this.context.onChange) {
      this.context.onChange(selected, eventKey);
    } else {
      this.setState({ selected });
    }
    if (this.props.onRowClick) {
      this.props.onRowClick(eventKey, selected);
    }
  }
  render() {
    const borderStyle = {
      transform: this.state.selected ? 'scaleY(1)' : ' scaleY(0)'
    }
    const { prefix, suffix, eventKey } = this.props;
    const otherProps = this.context.trigger ? { onClick: this.handleClick } : null;
    return (
      <li 
        className="dh-list-child dh-list-animation"
        data-selected={this.state.selected}
        {...otherProps}>
        <div className="dh-list-child__inner">
          {
            prefix ? (<span className="dh-list-inner__icon">{prefix}</span>) : null
          }
          <span className="dh-list-inner__title">{this.props.children}</span>
          {
            suffix ? (<span className="dh-list-inner__tail">{suffix}</span>) : null
          }
        </div>
        <div style={borderStyle} className="dh-list-child__border" />
      </li>
    )
  }
}
export default ListItem;
