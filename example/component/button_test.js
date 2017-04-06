import React from 'react';
import { 
	Test,
	Menu, 
	Row, 
	Col, 
	Button, 
	Icon, 
	Tabs, 
	Input,
	Layout
} from '../../src';
import buttonDoc from './button.md';
class ButtonTest extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}
	componentDidMount() {
		console.log(buttonDoc);
	}
	render() {
		return (
        <div>
          我是测试按钮的订单的d
          <Button/>
					<div dangerouslySetInnerHTML={{__html: buttonDoc}}/>
        </div>
		);
	}
}

export default ButtonTest;
