import React from "react";

export default class SearchHistory extends React.Component {

    constructor() {
        super();
    }

    getPreviousSearches() {
        var previousSearches = this.props.preferences.getPreference(this.props.username, "searches");
        var previousSearchesArr = previousSearches.split(",");
        return previousSearchesArr.map((item, index) => {
            if (item !== "") {
                return (
                    <li key={index}>
                        <button type="button" className="btn btn-xs btn-default" onClick={this.removeSearchHistoryItem.bind(this, index)}>X</button>&nbsp;&nbsp;
                        <a href="#" onClick={this.handleSearch.bind(this, item)}>{item.replace("+", " ")}</a>
                    </li>
                );
            } else {
                <li>No previous searches</li>
            }
        });
    }

    removeSearchHistoryItem(index) {
        this.props.preferences.removeSearchHistoryItem(this.props.username, index);
        this.setState({reload: true});
    }

    handleSearch(item) {
        // Execute search
        this.props.loadNewsFromServer(item, this.props.preferences.getPreference(this.props.username, "increment"), true);
    }

	render() {
		return (
            <div className="well">
                <h4>Previous searches</h4>
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-unstyled">
                            {this.getPreviousSearches()}
                        </ul>
                    </div>
                </div>
            </div>
		);
	}
}