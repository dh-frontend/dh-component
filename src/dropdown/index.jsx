import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../icon';

class Dropdown extends React.Component {
  static defaultProps = {

  }
  static PropTypes = {
      options: React.PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      visiable:false,
      title:props.options[0].value,
    }
  }
  handleVisible(visiable) {
    this.setState({visiable})
  }
  handelItemClick(key,title) {
    if(this.props.onClick) {
      this.props.onClick(key,title);
      this.handleVisible(false);
      this.setState({title})
    }
  }
  renderItem(data) {
    if(Array.isArray(data) && data.length) {
      this.element = document.createElement('div');
      
      this.element.className = 'dh-dropdown-list';
      document.body.appendChild(this.element);
      const itemList = (
        <ul>
          {
             data.map(item => (
               <li
                 className={item.chek ? 'active' : ''}
                 key={item.key}
                 onClick={()=>{this.handelItemClick(item.key,item.value)}}
                 >
                   {item.value}
                 </li>
             ))
          }
        </ul>
      )
      ReactDOM.render(itemList,this.element);
    }
 }
render() {
    const { options } = this.props;
    const { title } = this.state;
    return (
      <div
        className="dh-dropdown"
        onMouseLeave={this.handleVisible.bind(this,false)}
        >
        <div
          className="dh-dropdown-title"
          onClick={this.handleVisible.bind(this,true)}
          >
          <span>{title}</span>
          <Icon type="arrow-down" />
        </div>
        { options && this.renderItem(options) }
        {/* <div className={`dh-dropdown-list ${this.state.visiable ? '' : 'dh-dropdown-hidden'}`}>
           <ul>

           </ul>
        </div> */}
      </div>
    )
  }
}

export default Dropdown;
