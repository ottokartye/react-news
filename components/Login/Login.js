import React from "react";
import { Link } from "react-router";
import Auth from "../../app/Auth";

export default class Login extends React.Component {

	constructor() {
		super();
		this.state = {
			error: false
		};
	}

	handleLogin() {
		var username = this.refs.username.value;
		var password = this.refs.password.value;

		console.log('Logging in...');

		var loggedIn = Auth.login(username, password);

		if (!loggedIn) {
			return this.setState({ error: true });
		}

		const { location } = this.props;

		if (location.state && location.state.nextPathname) {
			this.context.router.replace(location.state.nextPathname);
		} else {
			this.context.router.replace('/');
		}
	}

	showAuthenticationError() {
		if (this.state.error) {
			return (
				<div className="form-group">
					<span className="text-danger">Provided username or password is invalid</span>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="col-md-offset-3 col-md-6">
				<div className="panel panel-default">
					<div className="panel-heading">Login</div>
					<div className="panel-body">
						<div className="form-group">
							<label for="username">Username</label>
							<input type="text" className="form-control" ref="username" placeholder="Username" />
						</div>
						<div className="form-group">
							<label for="password">Password</label>
							<input type="password" className="form-control" ref="password" placeholder="Password" />
						</div>
						{this.showAuthenticationError()}
						<button type="button" className="btn btn-primary" onClick={this.handleLogin.bind(this)}>Sign in</button>
					</div> 
					<div className="panel-footer">You don't have a user account? Please <Link to="register">register</Link>.</div>
				</div>
			</div>
		);
	}
}