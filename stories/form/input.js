import React from 'react';
import { Input } from '../../src';
export default class InputDemo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="test-input">
        <div className="test-input-eq "> 
          <Input value="1223" onChange={(e) => {console.log('wjb', e.target.value)}}/> 
        </div>
        <div className="test-input-eq "> 
          <Input placeholder="默认提示信息" /> 
        </div>
        <div className="test-input-eq "> 
          <Input defaultValue="我是系统的默认值"/> 
        </div>
        <div className="test-input-eq "> 
          <Input placeholder="请输入内容" addonBefore="前置"/> 
        </div>
        <div className="test-input-eq "> 
          <Input placeholder="请输入内容" addonAfter="后置"/> 
        </div>
        <div className="test-input-eq "> 
          <Input placeholder="请输入内容" searched	/> 
        </div>
        <div className="test-input-eq "> 
          <Input.Number placeholder="数字输入框" /> 
        </div>
      </div>
    )
  }
}