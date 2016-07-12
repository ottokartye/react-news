import React from "react";
import { Link, Navigation } from "react-router";
import CookieManager from "../app/CookieManager";

export default class NavBar extends React.Component {

	logoutHandler() {
		CookieManager.deleteUserCookie();
		this.props.setLoggedStateHandler(false);
		this.context.router.push('login');
	}

	getLoginLink() {
		if (this.props.logged) {
			return (
				<a href="#" onClick={this.logoutHandler.bind(this)}>Logout</a>	
			);
		} else {
			return (
				<Link to="login">Login</Link>
			);
		}
	}

	render(){
		return (
			<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		        <div class="container">
		            <div class="navbar-header">
		                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		                    <span class="sr-only">Toggle navigation</span>
		                    <span class="icon-bar"></span>
		                </button>
		                <a class="navbar-brand" href="#">Google News Feed</a>
		            </div>
		            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		                <ul class="nav navbar-nav pull-right">
		                    <li>{this.getLoginLink()}</li>
		                </ul>
		            </div>
		        </div>
	        </nav>
		);
	}
}