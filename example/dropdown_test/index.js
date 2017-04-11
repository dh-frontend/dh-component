import React from 'react';
import Markdown from '../home/Markdown'
import {Dropdown, Menu} from '../../src';
import md from './readme.md';
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
                <Dropdown overlay={menu}>
                  <a href="">选择框</a>
                </Dropdown>
              </div>
              <div style={{float:'left',width:200}}>
                 <Dropdown overlay={menu} title="自定义选择框" />
              </div>
            </div>
            <Markdown content={md}/>
          </div>
    )
  }
}
export default Dropdowntest;
