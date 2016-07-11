import React from "react";
import ArticleBox from "./Articles/ArticleBox";
import SearchBox from "./SearchBox";
import SearchHistory from "./SearchHistory";
import NewsReader from "../app/NewsReader";
import Auth from "../app/Auth";

export default class News extends React.Component {

	constructor(props) {
		super();
		console.log("News component loading...");
		this.state = {
			data: undefined,
			username: Auth.loggedIn()
		};
	}

	loadNewsFromServer(subject = '', numberOfItems = 10, resetNumberOfItems = false) {
		console.log("Trying to load news...");
		var promise = NewsReader.getPromise(subject, numberOfItems);

		var success = promise.then((data) => {
	  		if (data.responseData && data.responseData.feed && data.responseData.feed.entries) {
		    	this.setState({
		    		data: data.responseData.feed.entries, 
		    		subject: subject, 
		    		resetNumberOfItems: resetNumberOfItems, 
		    		username: Auth.loggedIn()
		    	});
		    	return true;
			} else {
				this.setState({
					data: undefined, 
					subject: subject, 
					numberOfItems: numberOfItems, 
					username: Auth.loggedIn()
				});
				return false;
			}
		});

		return success;
	}

	componentDidMount() {
		// Preset username to make queries for
		//this.state.preferences.setUser(this.props.username);
		// Load last performed search by user
		var searches = this.props.preferences.getPreference(this.state.username, "searches").split(",");
		var lastSearch = searches[searches.length - 1];
		var increment = this.props.preferences.getPreference(this.state.username, "increment");
		this.loadNewsFromServer(lastSearch, increment);
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-4">
					<SearchBox loadNewsFromServer={this.loadNewsFromServer.bind(this)} preferences={this.props.preferences} username={this.state.username} />
					<SearchHistory loadNewsFromServer={this.loadNewsFromServer.bind(this)} preferences={this.props.preferences} username={this.state.username} />
				</div>
				<ArticleBox data={this.state.data} 
				loadNewsFromServer={this.loadNewsFromServer.bind(this)} 
				subject={this.props.subject} 
				preferences={this.props.preferences} 
				resetNumberOfItems={this.state.resetNumberOfItems} 
				username={this.state.username} />
			</div>
		);
	}
}