import React, { Component } from "react";
import Note from "./Note";

export default class Notes extends Component {
	render() {
		return (
			<div className="notes">
				<h2>Notes</h2>
				<Note />
				<Note />
				<Note />
				<Note />
			</div>
		);
	}
}
