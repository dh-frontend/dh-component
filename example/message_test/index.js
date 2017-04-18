import React from 'react';
import { message, Button } from '../../src';
import Markdown from '../home/markdown';
import md from './message.md';

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
          <Button onClick={()=>{message.info('警告')}}>warning</Button>
          <Button onClick={()=>{message.clear()}}>clear</Button>
        </div>
        <Markdown content={md} />
      </div>
    )
  }
}
export default Messagetest;
