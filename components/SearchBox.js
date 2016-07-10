import React from "react";
//import UserPreferences from "../app/UserPreferences";

export default class SearchBox extends React.Component {

	handleSearch(e) {
		var terms = document.getElementById('searchInput').value;
		var termsArr = terms.split(" ");
		var searchTerm = termsArr.join("+");

		// Execute search
		this.props.loadNewsFromServer(searchTerm, 0);

		// Update search history
		this.props.preferences.savePreference("searches", searchTerm);
	}
	
	render() {

		return (
            <div className="well">
                <h4>Search news</h4>
                <div className="input-group">
                    <input id="searchInput" type="text" className="form-control" onClick={this.search} />
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