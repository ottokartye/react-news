import React from "react";
import ArticleBox from "./Articles/ArticleBox";
import SearchBox from "./SearchBox";
import Categories from "./Categories";
import NewsReader from "../app/NewsReader";

export default class Layout extends React.Component {

	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	loadNewsFromServer(subject = 'apple', start = 0) {
		var promise = NewsReader.getPromise(subject, start);

		promise.then((data) => {
	  		if (data.responseData && data.responseData.feed && data.responseData.feed.entries) {
		    	this.setState({data: data.responseData.feed.entries, subject: subject});
			} else {
				this.setState({data: undefined, subject: subject});
			}
		});
	}

	componentDidMount() {
		this.loadNewsFromServer();
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-4">
					<SearchBox loadNewsFromServer={this.loadNewsFromServer.bind(this)} subject={this.state.subject} />
					<Categories loadNewsFromServer={this.loadNewsFromServer.bind(this)} />
				</div>
				<ArticleBox data={this.state.data} />
			</div>
			
		);
	}
}