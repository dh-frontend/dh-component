import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Group extends Component {
  static propTypes = {
    defaultValue: PropTypes.number,
    onChange: PropTypes.function
  }

  static defaultProps = {
    defaultValue: 0,
    onChange: function(){}
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultValue
    };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(checked, idx) {
    if (checked && this.state.checked != idx) {
      this.setState({
        checked: idx
      });
      this.props.onChange(idx);
    }
  }

  render() {
    const { children } = this.props;
    const { checked } = this.state;

    return (
      <div>
        {React.Children.map(children, (child, i) => {
          const props = {
            ...child.props,
            onChange: (checked) => this.onSelectChange(checked, i),
            checked: i == checked,
            key: i
          };
          return {...child, props};
        })}
      </div>
    )
  }
}

export default Group;
