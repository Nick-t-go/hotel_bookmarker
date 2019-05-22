import React, { Component } from "react";

class FilterBar extends Component {
	changeUI = e => {
		this.setState({ ui: e.target.dataset.ui });
	};

	render() {
		const favorites = this.props.favorites.length;
		return (
			<div className="flex-between">
				<div className="filter-text">Filter by</div>
				{favorites > 0 && (
					<div className="nav-item">{`${favorites} Saved Hotels`}</div>
				)}
			</div>
		);
	}
}

export default FilterBar;
