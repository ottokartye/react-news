import React from "react";
import Article from "./Article";

export default class ArticleBox extends React.Component {
	render() {
		return (
			<section>
				<Article title="Test title" content="Test content" publishedDate="September 4th 2009" link={this.props.link} />
				<Article title="Another title" content="Test content" publishedDate="September 4th 2009" link={this.props.link} />
				<Article title="Yet another news item" content="Test content" publishedDate="September 4th 2009" link={this.props.link} />
			</section>
		);
	}
}