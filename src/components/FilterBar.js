import React, { Component, Fragment } from "react";
import ChevronUp from "../chevron-thin-up.svg";
import ChevronDown from "../chevron-thin-down.svg";

class FilterBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
			hotelStyles: ["Happening", "Lively", "Quiet", "Secluded"],
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
		const { atmosphere, hotelStyles } = this.state;
		return (
			<Fragment>
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
				<div>
					<form className="filter-form">
						<div className="filter-section">
							Atmosphere:
							{atmosphere.map(atmos => (
								<label>
									<input name={atmos} type="checkbox" />
									{atmos}
								</label>
							))}
						</div>
						<div className="filter-section">
							Style:
							{hotelStyles.map(hStyle => (
								<label>
									<input name={hStyle} type="checkbox" />
									{hStyle}
								</label>
							))}
						</div>
					</form>
					{}
				</div>
			</Fragment>
		);
	}
}

export default FilterBar;
