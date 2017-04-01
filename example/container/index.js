import React from 'react';
import { Test, Menu, Row, Col, Button, Icon, Dropdown, message } from '../../src';

class Wrapper extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}
 handleDropdown(key,value) {
	 console.log('key',key);
	 console.log('value',value)
 }
 handleMessage() {
	 console.log(message);
	 message.success('message success');
 }
	render() {
		let options = [{key:'1',value:'选项一'},{key:'2',value:'选项二'},{key:'3',value:'选项三'},{key:'4',value:'选项四'},]
		return (
	    <div>
			 	<Test/>
				<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['2']}
						style={{ lineHeight: '64px' }}
					>
        	<Menu.Item key="1">nav 1</Menu.Item>
        	<Menu.Item key="2">nav 2</Menu.Item>
        	<Menu.Item key="3">nav 3</Menu.Item>
      	</Menu>
				<div className="dh-test-grad">
					<Row type="flex" justify="space-around">
						<Col span={4}>col-4</Col>
						<Col span={4}>col-4</Col>
						<Col span={4}>col-4</Col>
						<Col span={4}>col-4</Col>
					</Row>
				</div>

				<div style={{marginTop: 24, padding: 24}}>
						<Button>我是默认按钮</Button>
						<Button type="primary">我是按钮primary</Button>
						<Button type="danger">我是按钮danger</Button>
						<Button type="danger" disabled>我被禁用了</Button>
						<Button type="primary" size="small">我是小按钮</Button>
						<div style={{ color: 'red', fontSize: 24}}>
							<Icon type="plus"/>
						</div>
				</div>
				{/* <div style={{marginTop:20,marginLeft:50,width:300}}>
					 <Dropdown
						  options={options}
							onClick={this.handleDropdown}
						 />
				</div> */}
				<h1 style={{textAlign:'center'}} >测试组件</h1>
				<div style={{width:800,height:500,margin:'0 auto',border:'1px solid #eee'}}>

					<Button onClick={this.handleMessage}>success</Button>
					<Button onClick={()=>{message.error('error','已通知',2,()=>{
						console.log('callback')
					})}}>error+callback</Button>
					<Button onClick={()=>{message.warning('warning')}}>waring</Button>
					<Button onClick={()=>{message.clear()}}>clear</Button>
				</div>
			</div>
		);
	}
}

export default Wrapper;
