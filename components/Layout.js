import React from "react";
import NavBar from "./NavBar";
import Auth from "../app/Auth";
//import md5 from "js-md5";

export default class Layout extends React.Component {

	constructor(props, context) {
		super();
		// Check if user cookie is set and set the states accordingly
		this.state = {
			logged: Auth.loggedIn()
		};
	}

	setLoggedStateHandler(newState) {
		this.setState({ logged: newState });
	}

	render() {
		return (
			<div>
				<NavBar 
					setLoggedStateHandler={this.setLoggedStateHandler.bind(this)}
					logged={this.state.logged}  />
				<div class="container">
					<div className="row">
						{React.cloneElement(
				            this.props.children, 
				            {setLoggedStateHandler: this.setLoggedStateHandler.bind(this)}
				        )}
					</div>
				</div>
			</div>
		);
	}
}