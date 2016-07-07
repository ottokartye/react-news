import React from "react";
import Article from "./Article";

export default class ArticleBox extends React.Component {
	constructor() {
		super();
		this.state = {
			list: []
		};
	}

	loadNewsFromServer() {
		var subject = this.props.subject;
		var numberOfItems = this.props.numberOfItems;
		$.ajax({
		  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=' + numberOfItems + '&callback=?&q=' + encodeURIComponent('http://news.google.com/news?q=' + subject + '&output=rss'),
		  dataType : 'json',
		  success  : function (data) {
	  		if (data.responseData.feed && data.responseData.feed.entries) {
	  			console.log(data.responseData.feed.entries);
		    	//this.state = {list: data.responseData.feed.entries};
			} else {
				console.log("No feed!");
			}
		  }.bind(this)
		});		
	}

	componentDidMount() {
		//this.loadNewsFromServer();
		//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
		setTimeout(this.loadNewsFromServer, 2000);
	}

	render() {
		return (
			<section>
				<Article title="Test title" content="Test content" publishedDate="September 4th 2009" />
			</section>
		);
	}
}