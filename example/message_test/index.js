import React from 'react';
import { message, Button } from '../../src';
import Markdown from '../home/markdown';
import md from './readme.md';

class Messagetest extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>
          <Button onClick={()=>{message.success('成功')}}>Success</Button>
          <Button onClick={()=>{message.success('失败')}}>error</Button>
          <Button onClick={()=>{message.success('警告')}}>warning</Button>
          <Button onClick={()=>{message.clear()}}>clear</Button>
        </div>
        <Markdown content={md} />
      </div>
    )
  }
}
export default Messagetest;
