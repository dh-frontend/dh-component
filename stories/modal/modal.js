import React from 'react';
import { Modal, Button, Menu, Dropdown } from '../../src';
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
  handleConfirm = () => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Bla bla ...',
      onOk: () => {
        console.log('我是confirm');
      },
      onCancel: () => {}
    })
  };
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
        </Menu.Item>
      </Menu>
  );
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>打开</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="primary" onClick={this.handleConfirm}>confirm</Button>
        <Modal
          title="我是一个测试数据"
          visible={this.state.visible}
          onCancel={() => { this.setState({visible: false})}}
          onOk={() => {console.log('modal onOk')}}
        >
          <div style={{ backgroundColor: "#cdac00", height: 300}}>
            我是模态框的body， 随便塞元素
          </div>
        </Modal>
      </div>
    )
  }
}
export default ModalDemo;
