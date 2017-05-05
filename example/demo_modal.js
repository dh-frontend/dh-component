import React from 'react';
import Mark from './component/mark';
import { Button, Modal } from '../src';

import docModal from '../doc/modal.md';

class ModalTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    }
  }

  handleModalShow = () => {
    this.setState({
      modalShow: true
    })
  };

  handleModalHide = () => {
    this.setState({
      modalShow: false
    })
  };

  handleModalOk = () => {
    console.log('modal ok clicked');
    this.handleModalHide();
  };

  handleConfirm = () => {
    Modal.confirm({
      title: '确认框',
      iconType: 'warning',
      content: '这是一个可爱的确认框',
      onOk: () => {
        console.log('ok clicked')
      }
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleModalShow}>点击弹出对话框</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={this.handleConfirm}>点击弹出确认框</Button>&nbsp;&nbsp;&nbsp;&nbsp;

        <Modal
          title="对话框"
          visible={this.state.modalShow}
          onOk={this.handleModalOk}
          onCancel={this.handleModalHide}
        >
          这是一个可爱的对话框
        </Modal>
        <Mark content={docModal}/>
      </div>
    )
  }
}
export default ModalTest;
