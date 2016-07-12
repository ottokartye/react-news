import React from "react";
import Article from "./Article";
import NoResult from "../NoResult";

export default class ArticleBox extends React.Component {

	constructor(props) {
		super();
		this.state = {
			numberOfItems: props.preferences.getPreference(props.username, "searches")
		};
	}
	
	componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll.bind(this));
	}

	handleScroll() {
		let scrollTop = event.srcElement.body.scrollTop + 648;
		let scrollHeight = document.getElementById('ArticleBox').scrollHeight;
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			// Reset numberOfItems if it's a new search
			if (this.props.resetNumberOfItems) {
				console.log("New search! Reseting numberOfItems to 10");
				this.setState({numberOfItems: this.props.preferences.getPreference(this.props.username, "increment")});
			}
	        this.props.loadNewsFromServer(this.props.subject, this.state.numberOfItems + this.props.preferences.getPreference(this.props.username, "increment"));
			this.setState({numberOfItems: this.state.numberOfItems + this.props.preferences.getPreference(this.props.username, "increment")});
	    }
	}

	getNodes() {
		if (this.props.data != undefined) {
			return this.props.data.map(function(article, index) {
		      return (
		        <Article key={index} title={article.title} contentSnippet={article.contentSnippet} publishedDate={article.publishedDate} link={article.link} />
		      );
		    });
		} else {
			return (
				<NoResult />
			);
		}
	}

	render() {
	    return (
	    	<div className="col-sm-8" id="ArticleBox">
	    		<h2>You searched for: {this.props.subject}</h2>
                <hr />
                {this.getNodes()}
            </div>
	    );
	}
}