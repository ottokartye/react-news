import React from "react";
import Header from "./Header";

export default class Article extends React.Component {
	render() {
		return (
			<article>
				<Header title={this.props.title} content={this.props.content} publishedDate={this.props.publishedDate} />
				<p>{this.props.content}</p>
				<a href="{this.props.link}">Go to page</a>
			</article>
		);
	}
}