import React from "react";
//import md5 from "js-md5";

export default class Layout extends React.Component {

	constructor(props, context) {
		super();
		// Check if user cookie is set and set the states accordingly
		console.log("Layout component loading...");	
		this.state = {
			logged: false
		};
	}

	// login(username, password) {
	// 	// Authenticate user
	// 	var authResult = this.state.preferences.authenticateUser(username, password);
	// 	if (authResult) {
	// 		this.setState({logged: true, username: username, authenticationError: false});
	// 		this.state.preferences.setUser(username);
	// 		CookieManager.storeUserCookie(username, 1);
	// 	} else {
	// 		this.setState({logged: false, authenticationError: true});
	// 		return false;
	// 	}
	// }

	// logout() {
	// 	CookieManager.deleteUserCookie();
	// }

	// register(username, password, passwordCheck) {
	// 	if (username !== "") {
	// 		if (password === passwordCheck) {
	// 			this.state.preferences.initUser(username, password);
	// 			this.state.preferences.setUser(username);
	// 			this.setState({usernameInvalid: false, passwordMissmatch: false, logged: true});
	// 			this.context.router.push('news');
	// 		} else {
	// 			this.setState({usernameInvalid: false, passwordMissmatch: true});
	// 		}
	// 	} else {
	// 		this.setState({usernameInvalid: true, passwordMissmatch: false});
	// 	}
	// }

	render() {
		return (
			<div className="row">
				{this.props.children}
			</div>
		);
	}
}