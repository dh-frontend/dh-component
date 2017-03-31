import React from 'react';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancle = this.handleCancle.bind(this);
  }
  handleClick(key,value) {
    if(this.props.onClick) {
      this.props.onClick(key,value);
    }
  }
  handleCancle() {
    if(this.props.onMouseLeave) {
      this.props.onMouseLeave(false);
    }
  }
  render() {
    const { itemDataSource, width, visiable, style,  } = this.props;
    return (
      <div
        className={`dh-dropdown-list ${visiable ? '' : 'dh-dropdown-hidden' }`}
        style={style}
        onMouseLeave={this.handleCancle}
        >
        <ul>
          { itemDataSource && itemDataSource.map(item => (
              <li
                key={item.key}
                onClick={() => {this.handleClick(item.key,item.value)}}
                >
                  {item.value}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Body;
