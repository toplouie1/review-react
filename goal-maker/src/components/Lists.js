// import React, { Component } from "react";
import List from "./List";

const Lists = ({ name }) => {
	return (
		<div className="lists">
			<h2>Lists </h2>
			<div className="list-container">
				<List name={name} />
				<List name={name} />
				<List name={name} />
			</div>
		</div>
	);
};

export default Lists;
