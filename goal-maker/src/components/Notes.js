import React, { Component } from "react";
import Note from "./Note";

export default class Notes extends Component {
	render() {
		return (
			<div>
				<Note />
				<Note />
				<Note />
			</div>
		);
	}
}
