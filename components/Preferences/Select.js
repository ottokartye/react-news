import React from "react";
import LocalStorage from "../app/LocalStorage";

export default class Select extends React.Component {

	constructor() {
		super();
		this.storage = new LocalStorage();
		var stored_value = this.storage.get("itemsToDisplay");
		this.state = {
			options: [5,10,25,50]
		};
	}

	getOptions() {
		return this.state.options.map((item, index) => ) {
			if (stored_value === item) {
				return (
					<option key={index} value={item} selected>{item}</option>
				);
			} else {
				return (
					<option value={item}>{item}</option>
				);
			}
		});
	}

	render() {
		return (
			<select id={this.props.identifier} className="form-control">
				
			</select>
		);
	}
}