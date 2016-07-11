import React from "react";
import ArticleBox from "./Articles/ArticleBox";
import SearchBox from "./SearchBox";
import SearchHistory from "./SearchHistory";
import NewsReader from "../app/NewsReader";
import Auth from "../app/Auth";
import UserPreferences from "../app/UserPreferences";

export default class News extends React.Component {

	constructor(props) {
		super();
		console.log("News component loading...");
		this.state = {
			data: undefined,
			preferences: new UserPreferences(),
			username: Auth.loggedIn()
		};
	}

	loadNewsFromServer(subject = '', numberOfItems = 10, resetNumberOfItems = false) {
		console.log("Trying to load news...");
		var promise = NewsReader.getPromise(subject, numberOfItems);
		this.subject = subject;

		var success = promise.then((data) => {
	  		if (data.responseData && data.responseData.feed && data.responseData.feed.entries) {
		    	this.setState({
		    		data: data.responseData.feed.entries, 
		    		subject: this.subject, 
		    		resetNumberOfItems: resetNumberOfItems, 
		    		username: Auth.loggedIn(),
		    		preferences: this.state.preferences
		    	});
			} else {
				this.setState({
					data: undefined, 
					subject: this.subject, 
					numberOfItems: numberOfItems, 
					username: Auth.loggedIn(),
					preferences: this.state.preferences
				});
			}
		});

		return success;
	}

	loadLastSearch() {
		var searches = this.state.preferences.getPreference(this.state.username, "searches").split(",");
		var lastSearch = searches[searches.length - 1];
		this.state.subject = lastSearch;
		var increment = this.state.preferences.getPreference(this.state.username, "increment");
		console.log("Loading last search: " + lastSearch);
		this.loadNewsFromServer(lastSearch, increment);
	}

	componentDidMount() {
		this.loadLastSearch();
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-4">
					<SearchBox 
						loadNewsFromServer={this.loadNewsFromServer.bind(this)} 
						preferences={this.state.preferences} 
						username={this.state.username} />
					<SearchHistory 
						loadNewsFromServer={this.loadNewsFromServer.bind(this)} 
						preferences={this.state.preferences} 
						username={this.state.username} />
				</div>
				<ArticleBox 
					data={this.state.data} 
					loadNewsFromServer={this.loadNewsFromServer.bind(this)} 
					subject={this.state.subject} 
					preferences={this.state.preferences} 
					resetNumberOfItems={this.state.resetNumberOfItems} 
					username={this.state.username} />
			</div>
		);
	}
}