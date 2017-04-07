import React from 'react';
import "./markdown.scss";
class Markdown extends React.Component {
	constructor(props, context) {
		super(props);
	}

	render() {
		return (
      <div
        className="dh-markdown"
        dangerouslySetInnerHTML={{ __html: this.props.content }}
      />
		);
	}
}

export default Markdown;
