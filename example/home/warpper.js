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
	renderMenu(obj) {
		return Object.keys(obj).map(key => {
			return (
				<Menu.Item key={key}>
					<Link to={key}>{obj[key]}</Link>
				</Menu.Item>
			);
		})
	}
	render() {
		const current = this.props.routes[1].path;
		return (
			<Layout>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
					onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
				>
					<div className="logo">使用文档</div>
					<Menu theme="dark" mode="inline">
						{ this.renderMenu(config)}
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#f3f3f3', padding: '0 16px', fontSize: 24}} >
							{config[current]}
					</Header>
					<Content style={{ margin: '24px 16px 0' }}>
						<div style={{ padding: 16, background: '#fff', minHeight: 400 }}>
							{this.props.children}
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						React component ©2017 Created by DH jimberton
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default Wrapper;
