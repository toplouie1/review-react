import React, { Component } from "react";

export default class NavBar extends Component {
	render() {
		return (
			<div className="Navbar">
				<h1> Goal Maker App</h1>
				<div className="buttons">
					<button>Settings</button>
					<button>Log out </button>
				</div>
			</div>
		);
	}
}
