import React, { Component } from "react";
import List from "./List";

export default class Lists extends Component {
	render() {
		return (
			<div className="List">
				<List />
				<List />
				<List />
				<List />
			</div>
		);
	}
}
