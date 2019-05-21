import React, { Component } from "react";

class FilterBar extends Component {
	changeUI = e => {
		this.setState({ ui: e.target.dataset.ui });
	};

	render() {
		return (
			<div className="flex-between">
				<div className="filter-text">Filter by</div>
				<div className="nav-item">Saved Hotels</div>
			</div>
		);
	}
}

export default FilterBar;
