import React from "react";
import Select from "./Select";
import LocalStorage from "../app/LocalStorage";

export default class PreferencesBox extends React.Component {

	constructor() {
		this.storage = new LocalStorage();
	}

	save() {
		var select = document.getElementById("itemsToDisplay");
		var numberOfItems = select.options[select.selectedIndex].value;
		this.storage("itemsToDisplay", numberOfItems);
	}

	get() {

	}

	render() {
		return (
			<div className="well">
				<h4>Preferences</h4>
				<form >
					<div className="form-group">
						<div className="row padding-top">
							<div className="col-md-6">
								<label for="itemsToDisplay">Items to display</label>
							</div>
							<div className="col-md-6">
								<Select identifier="itemsToDisplay" />
							</div>
						</div>
					</div>
					<div className="form-group">
						<button type="button" className="btn btn-primary" onClick={this.save}>Save</button>
					</div>
				</form>
			</div>
		);
	}
}