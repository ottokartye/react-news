import React from "react";

export default class Article extends React.Component {
	render() {
		return (
			<article>
				<p><span className="glyphicon glyphicon-time"></span> Published on {this.props.publishedDate}</p>
	            <h3>{this.props.title}</h3>
	            <p>{this.props.contentSnippet}</p>
	            <a href={this.props.link}>{this.props.link.substring(0, 50)}</a>
	            <hr />
            </article>
		);
	}
}