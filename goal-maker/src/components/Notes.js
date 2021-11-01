import React, { Component } from "react";
import Note from "./Note";

export default class Notes extends Component {
	render() {
		return (
			<div className="Notes">
				<h2>These are all note</h2>
				<Note />
				<Note />
				<Note />
			</div>
		);
	}
}
