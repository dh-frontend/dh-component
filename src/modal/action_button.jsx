import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';

export default class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      const $this = ReactDOM.findDOMNode(this);
      this.timeoutId = setTimeout(() => $this.focus());
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }
  onClick = () => {
    const { actionFn, closeModal } = this.props;
    if (actionFn) {
      let ret;
      if (actionFn.length) {
        ret = actionFn(closeModal);
      } else {
        ret = actionFn();
        if (!ret) {
          closeModal();
        }
      }
      if (ret && ret.then) {
        this.setState({ loading: true });
        ret.then((...args) => {
          // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
          // this.setState({ loading: false });
          closeModal(...args);
        });
      }
    } else {
      closeModal();
    }
  }

  render() {
    const { type, children } = this.props;
    const loading = this.state.loading;
    return (
      <Button type={type} onClick={this.onClick} loading={loading}>
        {children}
      </Button>
    );
  }
}
