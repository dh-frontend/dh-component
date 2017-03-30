import React from 'react';
import { Test } from '../../src';

class Wrapper extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			word: "hello world!"
		};
	}

	render() {
		return (
	     <div><Test/></div>
		);
	}
}

export default Wrapper;
