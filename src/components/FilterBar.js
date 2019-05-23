import React, { Component, Fragment } from "react";
import FilterList from "./FilterList";
import ChevronUp from "../chevron-thin-up.svg";
import ChevronDown from "../chevron-thin-down.svg";

class FilterBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false
		};
	}

	toggleShow = () => {
		this.setState({ show: !this.state.show });
	};

	onChange = e => {
		e.persist();
		const filter = e.target.dataset.filter;
		const value = e.target.checked;
		const key = e.target.name;
		console.log(filter, value, key);
		this.props.toggle(filter, key, value);
	};

	render() {
		const favorites = this.props.favorites.length;
		const { show } = this.state;
		const { atmosphere, hotelStyles } = this.props;
		return (
			<Fragment>
				<div className="flex-between">
					<div className="filter-text">
						<div>Filter by</div>
						<img
							src={this.state.show ? ChevronUp : ChevronDown}
							onClick={this.toggleShow}
							alt={this.state.show ? "ChevronUp" : "ChevronDown"}
						/>
					</div>
					{favorites > 0 && (
						<div className="nav-item">{`${favorites} Saved Hotels`}</div>
					)}
				</div>
				{show && (
					<div>
						<form className="filter-form">
							<FilterList
								header="Atmosphere"
								dataKey="atmosphere"
								options={atmosphere}
								onChange={this.onChange}
							/>
							<FilterList
								header="Style"
								dataKey="hotelStyles"
								options={hotelStyles}
								onChange={this.onChange}
							/>
						</form>
					</div>
				)}
			</Fragment>
		);
	}
}

export default FilterBar;
