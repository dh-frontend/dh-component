import React from 'react';


class ButtonTest extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}
	render() {
		console.log(this.props.routes)
		return (
        <div>
          欢迎是用datahunter组件
        </div>
		);
	}
}

export default ButtonTest;
