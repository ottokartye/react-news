import React from "react";
import ArticleBox from "./Articles/ArticleBox";
import SearchBox from "./SearchBox";
import Categories from "./Categories";
import NewsReader from "../app/NewsReader";
import UserPreferences from "../app/UserPreferences";

export default class Layout extends React.Component {

	constructor() {
		super();
		this.state = {
			data: [],
			preferences: new UserPreferences("otto")
		};
	}

	loadNewsFromServer(subject = 'apple', numberOfItems = 10) {
		console.log("Loading " + numberOfItems + " items of the subject " + subject);
		var promise = NewsReader.getPromise(subject, numberOfItems);

		var success = promise.then((data) => {
	  		if (data.responseData && data.responseData.feed && data.responseData.feed.entries) {
		    	this.setState({data: data.responseData.feed.entries, subject: subject});
		    	return true;
			} else {
				this.setState({data: undefined, subject: subject, numberOfItems: numberOfItems});
				return false;
			}
		});

		return success;
	}

	componentDidMount() {
		// Load last performed search by user
		var searches = this.state.preferences.getPreference("searches").split(",");
		var lastSearch = searches[searches.length - 1];
		var increment = this.state.preferences.getPreference("increment");
		this.loadNewsFromServer(lastSearch, increment);
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-4">
					<SearchBox loadNewsFromServer={this.loadNewsFromServer.bind(this)} subject={this.state.subject} preferences={this.state.preferences} />
					<Categories loadNewsFromServer={this.loadNewsFromServer.bind(this)} preferences={this.state.preferences} />
				</div>
				<ArticleBox data={this.state.data} loadNewsFromServer={this.loadNewsFromServer.bind(this)} subject={this.state.subject} preferences={this.state.preferences} />
			</div>
			
		);
	}
}