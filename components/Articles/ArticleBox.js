import React from "react";
import Article from "./Article";

export default class ArticleBox extends React.Component {
	render() {
	    var newsNodes = this.props.data.map(function(article) {
	      return (
	        <Article title={article.title} content={article.content} publishedDate={article.publishedDate} link={article.link} />
	      );
	    });
	    return (
	      <section>
	        {newsNodes}
	      </section>
	    );
	}
}