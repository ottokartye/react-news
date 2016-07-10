import React from "react";
import Article from "./Article";
import NoResult from "../NoResult";

export default class ArticleBox extends React.Component {

	constructor() {
		super();
		this.state = {
			numberOfItems: 10
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
		//console.log(window.innerHeight + window.scrollY + " | " + document.body.offsetHeight);
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	        var couldLoad = this.props.loadNewsFromServer(this.props.subject, this.state.numberOfItems + this.props.preferences.getPreference("increment"));
        	if (couldLoad) {
        		this.setState({numberOfItems: this.state.numberOfItems + this.props.preferences.getPreference("increment")});
        	}
	    }
		
        // if (scrollHeight === scrollTop) {
        // 	var couldLoad = this.props.loadNewsFromServer(this.props.subject, this.state.numberOfItems + this.props.preferences.getPreference("increment"));
        // 	if (couldLoad) {
        // 		this.setState({numberOfItems: this.state.numberOfItems + this.props.preferences.getPreference("increment")});
        // 	}
        // }
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