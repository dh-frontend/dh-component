import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>{this.props.children}</li>
    )
  }
}

export default Item;
