import React from "react";

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<h2>{this.props.title}</h2>
				<p>Written on <time datetime="{this.props.publishedDate}">{this.props.publishedDate}</time></p>
			</header>
		);
	}
}