import React, { Component } from "react";
import Lists from "./components/Lists";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
import Stats from "./components/Stats";

export default class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Lists />
				<Stats />
				<Notes />
			</div>
		);
	}
}
