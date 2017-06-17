import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Radio from '../radio';
import { Icon } from '../index.js';

class ListItem extends React.Component {
  static contextTypes = {
    animation: PropTypes.bool,
  }

  static propTypes = {
    prefix: PropTypes.element, // 前缀元素
    suffix: PropTypes.element, // 后缀元素
    eventKey: PropTypes.string, // 标记的key
    icon: PropTypes.string, // 后缀图标
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSuffixClick = this.handleSuffixClick.bind(this);
  }
  componentWillMount() {
    if (this.props.selected) {
      this.state. selected = this.props.selected;
    }
  }
  componentDidMount() {
    // this.element = ReactDOM.findDOMNode(this);
    // this.staticEventManger();
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.selected !== this.props.selected) {
  //     this.state.selected = nextProps.selected;
  //   }
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.selected !== nextProps.selected
  // }
  handleClick() {
    const { eventKey,  selected, onChange} = this.props;
    // const selected = !this.state.selected;
    // const eventKey = this.props.eventKey;
    // this.setState({ selected });
    // // this.context.onClick(selected, eventKey);
    if (onChange) {
      onChange(eventKey, !selected);
    }
  }
  handleSuffixClick() {
    if (this.props.onSuffixClick) {
      this.props.onSuffixClick(this.props.eventKey);
    }
  }
  renderSuffixElement() {
    const { selected } = this.state;
    const suffix = this.props.suffix;
    const icon = this.context.icon;
    const otherProps = { onClick: this.handleSuffixClick }
    let element = null;
    if (React.isValidElement(suffix)) {
      element = suffix;
    } else if (icon && typeof icon === 'string') {
      element = (<span className="dh-list-info" {...otherProps}><Icon type={icon} /></span>)
    } else if (typeof icon === 'boolean' && icon ) {
     element =  selected ? (
        <span className="dh-list-info" {...otherProps}> 
          <Icon type="success" />
        </span>
      ) : null;;
    }
    return element;
  }
  render() {
    const { selected } = this.props;
    const { prefix, suffix, eventKey } = this.props;
    const borderStyle = {
      transform: selected ? 'scaleY(1)' : ' scaleY(0)'
    }
    return (
      <li 
        className="dh-list-child"
        data-selected={selected}>
        <div className="dh-list-child__inner">
          {
            prefix ? (<div className="dh-list-inner__avatar">{prefix}</div>) : null
          }
          <div className="dh-list-inner__title" onClick={this.handleClick}>
            {this.props.children}
          </div>
          {
            React.isValidElement(this.renderSuffixElement()) ? (
              <div className="dh-list-inner__icon">
                {this.renderSuffixElement()}
              </div>
            ) : null      
          }

        </div>
        {
          typeof this.context.animation === 'boolean' && this.context.animation ? 
          (<div style={borderStyle} className="dh-list-child__border" />) : null 
        }
        
      </li>
    )
  }
}
export default ListItem;
