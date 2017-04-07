import React from 'react';
class Input extends React.Component {
  static defaultProps = {
    placeholder: '',
    value: '' 
  }
  static propsTypes = {
    width: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]),
    placeholder: React.PropTypes.string,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    disabled: React.PropTypes.bool,
    addonBefore: React.PropTypes.oneOfType([
      React.PropTypes.element,
    ]),
    addonAfter: React.PropTypes.oneOfType([
      React.PropTypes.element,
    ]),
  }

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  componentWillMount() {
    if (this.props.value) {
      this.state.value = this.props.value;
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.state.value = nextProps.value;
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !nextProps.value !== nextState.value;
  }
  handleChange(e) {
    const value = e.target.value;
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    this.setState({ value });
  }
  handleBlur(e) {
    const value = e.target.value;
    if (this.props.onBlur) {
      this.props.onBlur(e.target.value);
    }
  }
  render() {
    const { width, placeholder } = this.props;
    return (
      <div className="dh-input" style={{ width }}>
        {
          this.props.addonBefore ? (
            <div className="dh-input-before">
            {this.props.addonBefore}
            </div>
          ) : null
        }
        <div className="dh-input-warp">
          <input
            type={this.props.type || 'text'}
            className="dh-input-warp-inner"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder={placeholder}
            value={this.state.value}
            disabled={this.props.disabled}
          />
        </div>


        {
          this.props.addonAfter ? (
            <div className="dh-input-after">
              { this.props.addonAfter}
            </div>
          ) : null
        }

      </div>
    )
  }
}
export default Input;
