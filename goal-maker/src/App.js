// import React, { Component } from "react";
import Lists from "./components/Lists";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
import Stats from "./components/Stats";
import "./App.css";

const App = () => {
	const names = "Nima sherpa";
	return (
		<div className="app">
			<NavBar />
			<Stats />
			<Notes />
			<Lists name={names} />
		</div>
	);
};

export default App;
