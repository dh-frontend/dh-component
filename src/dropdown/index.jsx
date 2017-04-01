import React from 'react';
import ReactDOM from 'react-dom';
import DropdownBody from './body';
import Icon from '../icon';

class Dropdown extends React.Component {
  static PropTypes = {
      options: React.PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      visiable:true,
      value:props.options[0].value,
      firstLoad:true,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleVisible = this.handleVisible.bind(this);
    this.element = document.createElement('div');
  }
  handleVisible(visiable) {
    this.renderItem();
    this.setState({visiable});
  }
  renderItem() {
    const { options } = this.props;
    const dropdownEl = this.refs.dropdown;
    const width = dropdownEl.clientWidth; //dom元素的宽度
    const height = dropdownEl.clientHeight; //dom元素的高度
    const top = dropdownEl.getBoundingClientRect().top + height;  //dom元的相对高度 (相对于视窗左上角)
    const left = dropdownEl.getBoundingClientRect().left; //dom元素的相对宽(相对于视窗左上角)
    this.element.className = 'dh-dropdown-body';
    const style = {
      width,
      top,
      left,
    }
    document.body.appendChild(this.element);
    ReactDOM.render((
      <DropdownBody
        visiable={this.state.visiable}
        itemDataSource={options}
        style={style}
        onClick={this.handleClick}
        onMouseLeave={this.handleVisible}
      />
    ),this.element)
  }
  handleClick(key,value) {
    if (this.props.onClick) {
      this.props.onClick(key,value);
      this.setState({
        value:value,
        visiable:false,
      });
    }
  }
 render() {
    const { value } = this.state;
    return (
      <div
        className="dh-dropdown"
        ref="dropdown"
      >
        <div
          className="dh-dropdown-title"
          onMouseEnter={() => {this.handleVisible(true)}}
        >
          <span>{value}</span>
          <Icon type="arrow-down" />
        </div>
      </div>
    )
  }
}

export default Dropdown;
