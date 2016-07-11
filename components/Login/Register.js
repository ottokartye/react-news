import React from "react";

export default class Register extends React.Component {

	registerUser() {
		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;
		var passwordCheck = document.getElementById('passwordCheck').value;

		this.props.register(username, password, passwordCheck);
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
							<input type="text" className="form-control" id="username" placeholder="Username" />
							{this.showUsernameInvalid.bind(this)}
						</div>
						<div className="form-group">
							<label for="password">Password</label>
							<input type="password" className="form-control" id="password" placeholder="Password" />
							{this.showPasswordMissmatch.bind(this)}
						</div>
						<div className="form-group">
							<label for="password-check">Re-type password</label>
							<input type="password" className="form-control" id="passwordCheck" placeholder="Re-type password" />
						</div>
						<button type="button" className="btn btn-primary" onClick={this.registerUser.bind(this)}>Register me</button>
					</div>
					<div class="panel-footer">You already have an account? Please <a href="#">sign in</a>.</div>
				</div>
			</div>
		);
	}
}