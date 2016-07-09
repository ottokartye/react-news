import React from "react";
import Article from "./Article";
import NoResult from "../NoResult";

export default class ArticleBox extends React.Component {
	getNodes() {
		if (this.props.data != undefined) {
			return this.props.data.map(function(article, index) {
		      return (
		        <Article key={index} title={article.title} contentSnippet={article.contentSnippet} publishedDate={article.publishedDate} link={article.link} />
		      );
		    });
		} else {
			return (
				<NoResult />
			);
		}
	}

	render() {
	    return (
	    	<div className="col-sm-8">
	    		<h2>You searched for: {this.props.subject}</h2>
                <hr />
                {this.getNodes()}
            </div>
	    );
	}
}