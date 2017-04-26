import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
class Input extends React.Component {
  static defaultProps = {
    placeholder: '',
    value: '',
    searched: false
  }
  static propsTypes = {
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    disabled: PropTypes.bool,
    addonBefore: PropTypes.oneOfType([
      PropTypes.element,
    ]),
    addonAfter: PropTypes.oneOfType([
      PropTypes.element,
    ]),
    searched: PropTypes.bool,
    danger: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
      focus: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  componentWillMount() {
    // if (this.props.value) {
    //   this.state.value = this.props.value;
    // }
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
      this.props.onChange(value, e);
    }
    this.setState({ value });
  }
  handleBlur(e) {
    const value = e.target.value;
    if (this.props.onBlur) {
      this.props.onBlur(e.target.value, e);
    }
    this.setState({
      focus: false
    })
  }
  handleFocus(e) {
    this.setState({
      focus: true
    })
  }
  render() {
    const {
      width,
      placeholder,
      name,
      addonBefore,
      addonAfter,
      searched,
      danger } = this.props;
    const style = {
      transform: this.state.focus || danger ? 'scaleX(1)':' scaleX(0)'
    };
    return (
      <div className="dh-input" style={{ width }}>
        {
          addonBefore &&  searched === false ? (
            <div className="dh-input-before">
            {this.props.addonBefore}
            </div>
          ) : null
        }
        {
          searched ? (
            <div className={classNames('dh-input-before', {
              'dh-input-search': searched
            })}>
              <Icon type="search"/>
            </div>
          ): null
        }
        <div className="dh-input-warp">
          <input
            type={this.props.type || 'text'}
            className="dh-input-warp-inner"
            onFocus={this.handleFocus}
            name={name}
            defaultValue={this.props.defaultValue}
            onMouseOut={this.handleMouseLeave}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder={placeholder}
            value={this.state.value}
            disabled={this.props.disabled}
          />
        </div>


        {
          addonAfter ? (
            <div className="dh-input-after">
              { this.props.addonAfter}
            </div>
          ) : null
        }
      <div
        style={style}
        className={classNames('dh-input-bordered', {
          'dh-input-bordered-danger': danger
        })}/>
      </div>
    )
  }
}
export default Input;
