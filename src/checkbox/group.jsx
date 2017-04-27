import React, { Component } from 'react';
import PropTypes from 'prop-types';

import update from 'react/lib/update';

class Group extends Component {
  static propTypes = {
    defaultValue: PropTypes.array,
    onChange: PropTypes.function
  }

  static defaultProps = {
    defaultValue: [],
    onChange: function(){}
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultValue
    };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(chk, idx) {
    let checked;
    if (chk) {
      checked = update(this.state.checked, {
        $push: [
          idx
        ]
      });
    } else {
      const i = this.state.checked.indexOf(idx);
      if (i > -1) {
        checked = update(this.state.checked, {
          $splice: [
            [i, 1]
          ]
        })
      }
    }
    this.setState({
      checked
    });
    this.props.onChange(checked);
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
            checked: checked.indexOf(i) > -1,
            key: i
          };
          return {...child, props};
        })}
      </div>
    )
  }
}

export default Group;
