import React, { Component } from "react";

class SearchBar extends Component {
	changeUI = e => {
		this.setState({ ui: e.target.dataset.ui });
	};

	render() {
		const { userInput, handleSearch } = this.props;
		return (
			<div className="search-container">
				<div className="search-text">Where would you like to go?</div>
				<input
					className="search-input search-text "
					value={userInput}
					onChange={handleSearch}
				/>
				<hr align="center" width="75%" />
			</div>
		);
	}
}

export default SearchBar;
