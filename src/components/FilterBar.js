import React, { Component } from "react";
import ChevronUp from "../chevron-thin-up.svg";
import ChevronDown from "../chevron-thin-down.svg";

class FilterBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
			styles: ["Happening", "Lively", "Quiet", "Secluded"],
			atmosphere: [
				"Contemporary Classic",
				"Cutting Edge",
				"Modern Design",
				"Traditional Elegance"
			]
		};
	}

	toggleShow = () => {
		this.setState({ show: !this.state.show });
	};

	render() {
		const favorites = this.props.favorites.length;
		return (
			<div className="flex-between">
				<div className="filter-text">
					<div>Filter by</div>

					<img
						src={this.state.show ? ChevronUp : ChevronDown}
						onClick={this.toggleShow}
					/>
				</div>
				{favorites > 0 && (
					<div className="nav-item">{`${favorites} Saved Hotels`}</div>
				)}
			</div>
		);
	}
}

export default FilterBar;
