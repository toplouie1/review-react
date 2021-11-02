import React, { Component } from "react";
import Lists from "./components/Lists";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
import Stats from "./components/Stats";
import "./App.css";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<NavBar />
				<Stats />
				<Notes />
				<Lists />
			</div>
		);
	}
}
