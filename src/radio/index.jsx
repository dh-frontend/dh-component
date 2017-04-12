import React, { Component, PropTypes } from 'react';

import Group from './group';

class Radio extends Component {
  static Group = Group;

  static propTypes = {
    defaultValue: PropTypes.bool,
    onChange: PropTypes.function
  }

  static defaultProps = {
    defaultValue: false,
    onChange: function(){}
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultValue
    };
    this.onClickSelect = this.onClickSelect.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.defaultValue !== nextProps.defaultValue) {
      this.state.checked = nextProps.defaultValue;
    }
  }
  onClickSelect() {
    const { checked } = this.state;
    if (typeof(this.props.checked) !== 'undefined') {
      return this.props.onChange(!this.props.checked);
    }

    this.setState({
      checked: !checked
    });

    this.props.onChange(!checked);
  }

  render() {
    let { checked } = this.state;
    if (typeof(this.props.checked) !== 'undefined') {
      checked = this.props.checked;
    }

    return (
      <div className={`dh-radio ${checked ? 'dh-radio-checked' : ''}`} onClick={this.onClickSelect}>
        <i className={`dh-icon ${checked ? 'dh-icon-radio-checked' : 'dh-icon-radio'}`} />
        <span>{this.props.children}</span>
      </div>
    )
  }
}

export default Radio;
