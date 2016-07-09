import React from "react";
import ArticleBox from "./Articles/ArticleBox";
import SearchBox from "./SearchBox";
import Categories from "./Categories";
import PreferencesBox from "./Preferences/PreferencesBox";
import NewsReader from "../app/NewsReader";

export default class Layout extends React.Component {

	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	loadNewsFromServer(subject = 'apple', numberOfItems = 10) {
		//console.log('Searching for ' + subject + ' and listing ' + numberOfItems);

		var promise = NewsReader.getPromise(subject, numberOfItems);

		promise.then((data) => {
	  		if (data.responseData && data.responseData.feed && data.responseData.feed.entries) {
	  			console.log(data.responseData.feed.entries);
		    	this.setState({data: data.responseData.feed.entries});
			} else {
				this.setState({data: undefined});
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
					<SearchBox loadNewsFromServer={this.loadNewsFromServer.bind(this)} />
					<Categories />
					<PreferencesBox />
				</div>
				<ArticleBox data={this.state.data} />
			</div>
			
		);
	}
}