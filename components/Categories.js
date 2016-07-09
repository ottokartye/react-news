import React from "react";
import UserPreferences from "../app/UserPreferences";

export default class Categories extends React.Component {

    constructor() {
        super();
        this.state = {
            userPreferences: new UserPreferences("otto")
        }
    }

    getPreviousSearches() {
        var previousSearches = this.state.userPreferences.getPreference("searches");
        var previousSearchesArr = previousSearches.split(",");
        return previousSearchesArr.map((item, index) => {
            return (
                <li key={index}><a href="#" onClick={this.handleSearch.bind(this, item)}>{item}</a></li>
            );
        });
    }

    handleSearch(item) {
        // Execute search
        this.props.loadNewsFromServer(item, 0);

        // Save preferences
        //this.state.userPreferences.set()
    }

	render() {
		return (
            <div className="well">
                <h4>Categories</h4>
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