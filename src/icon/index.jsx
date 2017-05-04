import React from 'react';

import PropTypes from 'prop-types';

class Icon extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }


  render () {
    return (
      <i 
        {...this.props}
        className={`dh-icon dh-icon-${this.props.type}`} 
      />
    );
  }
}

export default Icon;
