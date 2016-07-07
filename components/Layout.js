import React from "react";
import ArticleBox from "./Articles/ArticleBox";

export default class Layout extends React.Component {

	constructor() {
		super();
		var list = [
		  {title: "First news item", content: "some news comes here", publishedDate: "September 4th 2009", link: "https://google.com/"},
		  {title: "Another title", content: "some news comes here", publishedDate: "November 4th 2010", link: "https://google.com/"},
		  {title: "Yet another title", content: "some news comes here", publishedDate: "August 4th 2011", link: "https://google.com/"}
		];
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
		//setTimeout(this.loadNewsFromServer, 2000);
	}

	render() {
		return (
			<ArticleBox list={this.list} />
		);
	}
}