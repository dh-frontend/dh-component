import React from 'react';
import Radio from '../radio';
class ListItem extends React.Component {
  static propTypes = {
    radio: React.PropTypes.bool,
    eventKey: React.PropTypes.string,
    addonAvatar: React.PropTypes.element,

  }

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.state.checked = nextProps.checked;
    }
  }

  handleChange(checked) {
    if (this.props.onChange) {
      this.props.onChange(checked, this.props.eventKey);
    }
  }
  render() {
    const { checked, eventKey, addonAvatar} = this.props;
    const style = {
      transform: checked ? 'scaleY(1)':' scaleY(0)'
    };
    return (
      <li
        className="dh-list-warp-item"
        data-checked={checked}
      >
        <div className="dh-list-warp-inner">
          { addonAvatar ? (<span className="warp-inner-label">{addonAvatar}</span>) : null }
          <span className="warp-inner-content">{ this.props.children }</span>
          <span className="warp-inner-radio">
            <Radio onChange={this.handleChange} defaultValue={this.state.checked}/>
          </span>
        </div>
        <div
          style={style}
          className="dh-list-warp-bordered"/>
      </li>
    )
  }
}
export default ListItem;
