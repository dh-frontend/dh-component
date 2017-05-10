import React from 'react';
import { Modal, Button } from '../../src';
class ModalDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ visible: true });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>打开</Button>
        <Modal 
          title="我是一个测试数据"
          desc="我是一个描述信息"
          visible={this.state.visible}
          onClose={() => { this.setState({visible: false})}}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    )
  }
}
export default ModalDemo;