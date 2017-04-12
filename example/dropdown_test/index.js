import React from 'react';
import Markdown from '../home/Markdown'
import { Dropdown, Menu, Button } from '../../src';
import md from './dropdown.md';
class Dropdowntest extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <span>选项一</span>
                </Menu.Item>
                <Menu.Item>
                    <span>选项二</span>
                </Menu.Item>
                <Menu.Item>
                    <span>选项三</span>
                </Menu.Item>
            </Menu>
        );
        return (
          <div>
            <div style={{overflow:'hidden'}}>
              <div style={{float:'left',width:200,marginRight:50}}>
                <Dropdown overlay={menu} trigger="click">
                    <Button type="primary">hover我触发</Button>
                </Dropdown>
              </div>
              <div style={{float:'left',width:200}}>
                 <Dropdown overlay={menu} trigger="hover">
                    <a>点击我</a>
                 </Dropdown>
              </div>
            </div>
            <Markdown content={md}/>
          </div>
    )
  }
}
export default Dropdowntest;
