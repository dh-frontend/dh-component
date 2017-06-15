import React, { Component } from 'react';
import PropTypes from 'prop-types';

import update from 'react/lib/update';

class Group extends Component {
  static propTypes = {
    defaultValue: PropTypes.array,
    defaultSelectKeys: PropTypes.array,
    onChange: PropTypes.func
  }

  static defaultProps = {
    defaultValue: [],
    onChange: function(){}
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultSelectKeys || props.defaultValue || [],
    };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(chk, key) {
    const { selectKeys } = this.state;
    let checked;
    if (chk) {
      checked = update(this.state.checked, {
        $push: [
          key
        ]
      });
    } else {
      const i = this.state.checked.indexOf(key);
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
          const key = child.key || i;
          const props = {
            ...child.props,
            onChange: (checked) => this.onSelectChange(checked, key),
            checked: checked.indexOf(key) > -1,
            key: key,
            style: {
              marginRight: i < React.Children.toArray().length - 1 ? 32 : 0
            }
          };
          return {...child, props};
        })}
      </div>
    )
  }
}

export default Group;
