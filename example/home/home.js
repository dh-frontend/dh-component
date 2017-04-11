import React from 'react';
import md from './home.md';
class Home extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			index: 0
		};
	}

	render() {
		
		return (
      <div>
        <h2>react 文档</h2>
				<div
					className="dh-marked"
					dangerouslySetInnerHTML={{ __html: md }}
				/>
      </div>
		);
	}
}

export default Home;
