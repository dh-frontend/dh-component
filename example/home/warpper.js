import React from 'react';
import { Link } from 'react-router';
import config from '../config.json';

import { 	Layout, Menu, Button } from '../../src';
const { Header, Content, Footer, Sider } = Layout;

class Wrapper extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			index: 0
		};
	}
	renderMenu(array) {
		return array.map((item, idx) => {
			return (
				<Menu.Item key={idx}>
					<Link to={item.path}>{item.desc}</Link>
				</Menu.Item>
			);
		})
	}
	render() {
		return (
			<Layout>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
					onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
				>
					<div className="logo">使用文档</div>
					<Menu theme="dark" mode="inline">
						{ this.renderMenu(config.menu)}
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }} />
					<Content style={{ margin: '24px 16px 0' }}>
						<div style={{ padding: 16, background: '#fff', minHeight: 400 }}>
							{this.props.children}
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Datahunter component ©2016 Created by DH-jimberton
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default Wrapper;
