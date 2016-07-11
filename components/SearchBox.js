import React from "react";

export default class SearchBox extends React.Component {

	constructor(){
		super();
		console.log('SearchBox component loading...');
	}

	handleSearch() {
		var terms = this.refs.searchInput.value;
		var termsArr = terms.split(" ");
		var searchTerm = termsArr.join("+");

		// Execute search
		this.props.loadNewsFromServer(searchTerm, this.props.preferences.getPreference(this.props.username, "increment"));

		console.log('Trying to save search: ' + searchTerm);

		// Update search history
		this.props.preferences.updateSearchHistory(this.props.username, searchTerm);
	}
	
	render() {

		return (
            <div className="well">
                <h4>Search news</h4>
                <div className="input-group">
                    <input ref="searchInput" type="text" className="form-control" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={this.handleSearch.bind(this)}>
                            <span className="glyphicon glyphicon-search"></span>
                    </button>
                    </span>
                </div>
            </div>
		);
	}
}