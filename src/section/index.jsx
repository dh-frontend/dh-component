import React from 'react';
import classNames from 'classnames';

class Section extends React.Component {
  static defaultProps = {
    response: true,
    backgroundColor: null,
    className: null
  }

  static propTypes = {
    response: React.PropTypes.bool,
    backgroundColor: React.PropTypes.string,
    className: React.PropTypes.string
  }

  constructor(props) {
    super(props);
  }
  render() {
    const { response, className, backgroundColor } = this.props;
    return (
      <div
        style={backgroundColor ? {backgroundColor}: null}
        className={classNames('dh-section', {
          'dh-section-response': response,
          [className]: className
        })}
      >
        {this.props.children}
      </div>
    )
  }
}
export default Section;
