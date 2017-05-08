import React from 'react';
import { Input, Form, Button } from '../../src';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
 class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
   this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldError,  getFieldDecorator} = this.props.form;
    return (
      <div>
        <div className="test-form">
          <p>水平布局</p>
          <Form>
            <Form.Item
              label="用户名"
            >
            {
              getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
          })(<Input type="text" />)
            }
            </Form.Item>
            <Form.Item
              label="出生日期"
            >
              {
              getFieldDecorator('name')(<Input type="text" />)
            }
            </Form.Item>
          </Form>
          <Button onClick={this.handleClick}> 提交 </Button>
        </div>
        {/**
         *         <div className="test-form">
          <p>垂直布局</p>
          <Form layout="vertical">
            <Form.Item
              label="用户名"
              hasFeedback
            >
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="出生日期"
              hasFeedback
            >
              <Input type="text" />
            </Form.Item>
          </Form>
        </div>
         */}

      </div>

    )
  }
}
export default Form.create()(FormDemo);