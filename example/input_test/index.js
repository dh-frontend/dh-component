import React from 'react';
import Markdown from '../home/Markdown';

import { Input } from '../../src';
import md from './Input.md';
class InputTest extends React.Component {
  render() {
    return (
      <div>
        <Input searched placeholder="请输入内容" danger/>
        <Input.Number placeholder="请输入内容" />
        <Markdown content={md}/>
      </div>
    )
  }
}
export default InputTest;
