import React from "react";
import Auth from "../../app/Auth";
import UserPreferences from "../../app/UserPreferences";

export default class Register extends React.Component {

	handleRegistration() {
		var username = this.refs.username.value;
		var password = this.refs.password.value;

		//Auth.register
		if (Auth.register()) {
			var preferences = new UserPreferences();
			preferences.initUser(username, password);
			const { location } = this.props;
			this.props.setLoggedStateHandler(true);

			if (location.state && location.state.nextPathname) {
				this.context.router.replace(location.state.nextPathname);
			} else {
				this.context.router.replace('/');
			}
		}
	}

	showUsernameInvalid() {
		if (this.props.usernameInvalid) {
			return (
				<span className="danger">Username is invalid</span>
			);
		}
	}

	showPasswordMissmatch() {
		if (this.props.passwordMissmatch) {
			return (
				<span className="danger">Passwords don't match</span>
			);
		}
	}

	render() {
		return (
			<div className="col-md-offset-3 col-md-6">
				<div className="panel panel-default">
					<div class="panel-heading">Register</div>
					<div className="panel-body">
						<div className="form-group">
							<label for="username">Username</label>
							<input type="text" className="form-control" ref="username" placeholder="Username" />
							{this.showUsernameInvalid.bind(this)}
						</div>
						<div className="form-group">
							<label for="password">Password</label>
							<input type="password" className="form-control" ref="password" placeholder="Password" />
							{this.showPasswordMissmatch.bind(this)}
						</div>
						<button type="button" className="btn btn-primary" onClick={this.handleRegistration.bind(this)}>Register me</button>
					</div>
					<div class="panel-footer">You already have an account? Please <a href="#">sign in</a>.</div>
				</div>
			</div>
		);
	}
}