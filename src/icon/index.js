import React from 'react';

class Icon extends React.Component {
  static propTypes = {
    type: React.PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }
  render () {
    return (
      <i className={`dh-icon dh-icon-${this.props.type}`}/>
    )
  }
}

export default Icon;
