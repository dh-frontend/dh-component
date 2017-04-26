import React from 'react';
import docHome from '../doc/home.md';
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
					dangerouslySetInnerHTML={{ __html: docHome }}
				/>
      </div>
		);
	}
}

export default Home;
