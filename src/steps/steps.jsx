
import React from 'react';
import PropTypes from 'prop-types';
import Step from './step';
import Icon from '../icon';
const options = {
  1: 'Finished',
  2: 'Progress',
  3: 'Waiting'
};
class Steps extends React.Component {
  static Step = Step
  static propTypes = {
     lineOption: PropTypes.shape({
       weight: PropTypes.number,
       color: PropTypes.string,
       transitionColor: PropTypes.string
     }),
     headOption: PropTypes.shape({
       bgColor: PropTypes.string,
       color: PropTypes.string,
       transitionColor: PropTypes.string,
       transitionBgColor: PropTypes.string
     }),
     mainOption: PropTypes.shape({
      color: PropTypes.string,
      transitionColor: PropTypes.string,
    })
  }
  static childContextTypes = {
    width: PropTypes.string.isRequired,
    lineOption: PropTypes.object,
    headOption: PropTypes.object,
    mainOption: PropTypes.object
   }
  constructor(props) {
    super(props);
    this.state = {
      slide: false,
      overOptions: []
    }
  }
  getChildContext() {
    const { children, lineOption, headOption, mainOption} = this.props;
    const count = React.Children.count(children);
    const width = `${100 / count}%`;
    return {
      width,
      lineOption,
      headOption,
      mainOption
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.current) {
      this.state.overOptions.push(nextProps.current);
    }
  }
  render() {
    const { children } = this.props;
    const { overOptions } = this.state;
    return (
      <div className="dh-steps">
        {
          React.Children.map(children, (child, index) => {
            const status = overOptions.indexOf(index + 1) !== -1 ? 'finish' : 'waiting';
            const props = {
              icon: status === 'finish' ? (<Icon type="ok"/>) : index + 5,
              title: index > 2 ? options[3] : options[index + 1],
              status,
              ...child.props,
            }
            return  { ...child, props }
          })
        }
      </div>
    )
  }
}


export default Steps;
