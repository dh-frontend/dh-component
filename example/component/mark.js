import React from 'react';
import "./markdown.scss";
class Doc extends React.Component {
	constructor(props, context) {
		super(props);
	}

	render() {
		return (
      <div
        className="dh-doc"
        dangerouslySetInnerHTML={{ __html: this.props.content }}
      />
		);
	}
}

export default Doc;
