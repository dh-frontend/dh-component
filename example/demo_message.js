import React from 'react';
import { message, Button } from '../src';
import Mark from './component/mark';
import docMessage from '../doc/message.md';

class Messagetest extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>
          <Button onClick={()=>{message.success({ title: '成功', desc: '我提交成功了'})}}>Success</Button>
          <Button onClick={()=>{message.error('失败')}}>error</Button>
          <Button onClick={()=>{message.info('警告', 200)}}>warning</Button>
          <Button onClick={()=>{message.clear()}}>clear</Button>
        </div>
        <Mark content={docMessage} />
      </div>
    )
  }
}
export default Messagetest;
