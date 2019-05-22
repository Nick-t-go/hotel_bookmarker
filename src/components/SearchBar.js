import React, { Component } from "react";

class SearchBar extends Component {
	render() {
		const { handleSearch } = this.props;
		return (
			<div className="search-container">
				<div className="search-text">Where would you like to go?</div>
				<input
					className="search-input search-text "
					onChange={handleSearch}
				/>
				<hr align="center" width="75%" />
			</div>
		);
	}
}

export default SearchBar;
