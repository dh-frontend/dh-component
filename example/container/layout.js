import React from 'react';
import { Link } from 'react-router';
import { 	Layout, Menu } from '../../src';
const { Header, Content, Footer, Sider } = Layout;
import config from './config.js';
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
					<Link to={item.name}>
					{item.title}
					</Link>
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
						{ this.renderMenu(config)}
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }} />
					<Content style={{ margin: '24px 16px 0' }}>
						<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
							{this.props.children}
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Datahunter component ©2016 Created by DH UED
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default Wrapper;
