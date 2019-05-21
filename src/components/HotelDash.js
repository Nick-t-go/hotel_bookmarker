import React, { Component } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

class TodoDash extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ui: "search",
			favorites: []
		};
	}

	changeUI = e => {
		this.setState({ ui: e.target.dataset.ui });
	};

	componentDidMount() {}

	render() {
		const { ui } = this.state;
		return (
			<div className="container">
				<Nav ui={ui} changeUI={this.changeUI} />
				<SearchBar />
			</div>
		);
	}
}

export default TodoDash;
