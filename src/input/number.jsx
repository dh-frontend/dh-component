import React from 'react';
import  RcInputNumber from 'rc-input-number';

class Number extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { props } = this.props;
    return (
      <RcInputNumber
        {...props}
        prefixCls="dh-input-number" 
      />
    )
  }
}
export default Number;