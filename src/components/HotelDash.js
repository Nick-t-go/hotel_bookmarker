import React, { Component } from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import HotelCard from "./HotelCard";

class HotelDash extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hotels: [],
			hotelStyles: {
				Happening: false,
				Lively: false,
				Quiet: false,
				Secluded: false
			},
			atmosphere: {
				"Contemporary Classic": false,
				"Cutting Edge": false,
				"Modern Design": false,
				"Traditional Elegance": false
			}
		};
	}

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
		console.log(json.hotels);
	};

	render() {
		const { hotels, userInput, hotelStyles, atmosphere } = this.state;
		const { favorites, addToFavorites, removeFromFavorites } = this.props;
		const fav_ids = favorites.map(hotel => hotel.hotel_id);

		return (
			<div className="container">
				<SearchBar handleSearch={this.handleSearch} />
				<FilterBar
					favorites={favorites}
					hotelStyles={hotelStyles}
					atmosphere={atmosphere}
				/>
				<div className="hotel-grid">
					{hotels.map(hotel => (
						<HotelCard
							key={hotel._source.hotel_id}
							hotel={hotel._source}
							favorite={fav_ids.includes(hotel._source.hotel_id)}
							add={addToFavorites}
							remove={removeFromFavorites}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default HotelDash;
