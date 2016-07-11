import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from "../components/Layout";
import News from "../components/News";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Auth from "./Auth";

Layout.contextTypes = {
  router: PropTypes.object.isRequired
};

News.contextTypes = {
	router: PropTypes.object.isRequired
};

Login.contextTypes = {
	router: PropTypes.object.isRequired
};

function requireAuth(nextState, replace) {
	let username = Auth.loggedIn();
	if(!username) {
		replace({
			pathname: 'login',
			state: { nextPathname: nextState.location.pathname }
		});
	}
}

let app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}> 
		<Route path="/" component={Layout}>
			<IndexRoute component={News} onEnter={requireAuth}></IndexRoute>
			<Route path="register" component={Register}></Route>
			<Route path="login" component={Login}></Route>
		</Route>
	</Router>, 
app);