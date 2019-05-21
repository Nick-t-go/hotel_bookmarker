import React, { Component } from "react";

class TodoDash extends Component {
	changeUI = e => {
		this.setState({ ui: e.target.dataset.ui });
	};

	render() {
		return (
			<div className="search-container">
				<div className="search-text">Where would you like to go?</div>
				<input className="search-input search-text " />
			</div>
		);
	}
}

export default TodoDash;
