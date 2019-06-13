import React, { Component } from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import HotelCard from "./HotelCard";
import MapView from "./MapView";
import { Route } from "react-router-dom";

class HotelDash extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hotels: [],
			atmosphere: {
				Happening: false,
				Lively: false,
				Quiet: false,
				Secluded: false
			},
			hotelStyles: {
				"Contemporary Classic": false,
				"Cutting-Edge": false,
				"Modern Design": false,
				"Traditional Elegance": false
			}
		};
	}

	toggleFilter = (filter, key, value) => {
		this.setState({
			[filter]: { ...this.state[filter], [key]: value }
		});
	};

	handleSearch = async e => {
		const url = new URL("https://www.tablethotels.com/_api/term_search");
		const params = {
			query: e.target.value,
			arrDate: "2019-05-22",
			depDate: "2019-05-26",
			nA: 1,
			nC: 0,
			nR: 1,
			lang: "en"
		};
		url.search = new URLSearchParams(params);
		const response = await fetch(url);
		const json = await response.json();
		this.setState({ hotels: json.hotels });
	};

	filterHotels = () => {
		const { atmosphere, hotelStyles, hotels } = this.state;
		//check if any filters are selected for each category
		const activeAtmosphereFilter = Object.keys(atmosphere).filter(
			key => atmosphere[key]
		);
		const activeStylesFilter = Object.keys(hotelStyles).filter(
			key => hotelStyles[key]
		);

		const activeStyles = activeStylesFilter.length;
		const activeAtmosphere = activeAtmosphereFilter.length;

		if (activeStyles > 0 || activeAtmosphere > 0) {
			const filtered = hotels.filter(hotel => {
				//if there are no filters selected OR item is included in filter it passes
				const atCheck =
					activeAtmosphere === 0 ||
					activeAtmosphereFilter.includes(
						hotel._source.criteria.atmosphere
					);
				const styleCheck =
					activeStyles === 0 ||
					activeStylesFilter.includes(hotel._source.criteria.style);
				//hotel must meet criteria of both filters
				return atCheck && styleCheck;
			});

			return filtered;
		} else {
			return hotels;
		}
	};

	render() {
		const { hotelStyles, atmosphere } = this.state;
		const { favorites, addToFavorites, removeFromFavorites } = this.props;
		const fav_ids = favorites.map(hotel => hotel.hotel_id);

		return (
			<div className="container">
				<SearchBar handleSearch={this.handleSearch} />
				<FilterBar
					favorites={favorites}
					hotelStyles={hotelStyles}
					atmosphere={atmosphere}
					toggle={this.toggleFilter}
				/>
				{true ? (
					<div className="hotel-grid">
						{this.filterHotels().map(hotel => (
							<HotelCard
								key={hotel._source.hotel_id}
								hotel={hotel._source}
								favorite={fav_ids.includes(
									hotel._source.hotel_id
								)}
								add={addToFavorites}
								remove={removeFromFavorites}
							/>
						))}
					</div>
				) : (
					<MapView hotels={this.filterHotels()} />
				)}
			</div>
		);
	}
}

export default HotelDash;
