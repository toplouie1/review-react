import React, { Component } from "react";
import List from "./List";

export default class Lists extends Component {
	render() {
		return (
			<div className="list">
				<h2>Lists </h2>
				<div className="list-container">
					<List />
					<List />
					<List />
				</div>
			</div>
		);
	}
}
