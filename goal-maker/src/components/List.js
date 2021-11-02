import React, { Component } from "react";

export default class List extends Component {
	render() {
		return (
			<div className="list">
				<h4>List Name</h4>
				<ul>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
				</ul>
			</div>
		);
	}
}
