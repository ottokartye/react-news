import React from "react";

export default class Categories extends React.Component {
	render() {
		return (
            <div className="well">
                <h4>Categories</h4>
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-unstyled">
                            <li><a href="#">Politics</a></li>
                            <li><a href="#">Sports</a></li>
                            <li><a href="#">Nature</a></li>
                            <li><a href="#">Politics</a></li>
                        </ul>
                    </div>
                </div>
            </div>
		);
	}
}