import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Group extends Component {
  static propTypes = {
    defaultSelectKey: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    onChange: function(){}
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultSelectKey
    };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(checked, key) {
    if (checked && this.state.checked != key) {
      this.setState({
        checked: key
      });
      this.props.onChange(key);
    }
  }

  render() {
    const { children } = this.props;
    const { checked } = this.state;

    return (
      <div>
        {React.Children.map(children, (child, i) => {
          const key = child.key || i;
          const props = {
            ...child.props,
            onChange: (checked) => this.onSelectChange(checked, key),
            checked: checked === key,
            key: key
          };
          return {...child, props};
        })}
      </div>
    )
  }
}

export default Group;
