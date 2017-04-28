
import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 */
class Step extends React.Component {
  static contextTypes = {
    width: PropTypes.string.isRequired,
    lineOption: PropTypes.object,
    headOption: PropTypes.object,
    mainOption: PropTypes.object
  }

  static propsTypes = {
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]),
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]),
    status: PropTypes.oneOf(['progress, finished', 'waiting']),
  }

  constructor(props) {
    super(props);
  }

  render() {

    const { width, lineOption, headOption, mainOption } = this.context;
    const lineStyle = {
      backgroundColor: lineOption && lineOption.color,
      height: lineOption && lineOption.weight
    };
    const lineStyleTransition = {
      backgroundColor: lineOption && lineOption.transitionColor
    }
    const headStyle = {
      backgroundColor: headOption && headOption.bgColor,
      color: headOption && headOption.color,
    }
    const headStyleTransition = {
      backgroundColor: headOption && headOption.transitionBgColor,
      color: headOption && headOption.transitionColor
    }
    const mainStyle = {
      color: mainOption && mainOption.color
    }
    const mainStyleTransition = {
      color: mainOption && mainOption.transitionColor
    }
    const {icon, title } = this.props;
    return (
      <div className="dh-steps-item" style={{width}}>
        <div className="dh-steps-step">
          <div className="dh-steps-head">
            {
              this.props.status === 'finish' ? (
                <div className="dh-steps-head-inner-finish" style={headStyleTransition}>
                  {icon}
                </div>
              ) : (
                <div style={headStyle} className="dh-steps-head-inner">
                  { icon }
                </div>
              )
            }
          </div>
          <div className="dh-steps-main">
            {
              this.props.status === 'finish' ? (
                <div style={mainStyle} className="dh-steps-main-title-finish">
                  {title}
                </div>
              ) : (
                <div style={mainStyleTransition} className="dh-steps-main-title">
                  {title}
                </div>
              )
            }
          </div>
        </div>
        <div style={lineStyle} className="dh-steps-tail">
          <div
            style={lineStyleTransition}
            className="dh-steps-tail__inline"
            data-slide={this.props.status === 'finish'}
          />
        </div>
      </div>
    )
  }
}
export default Step;
