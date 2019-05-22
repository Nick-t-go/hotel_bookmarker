import React, { Component, Fragment } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import HotelCard from "./HotelCard";
import Favorites from "./Favorites";

class TodoDash extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ui: "search",
			favorites: [],
			search: null,
			hotels: [],
			favorites: []
		};
	}

	changeUI = e => {
		this.setState({ ui: e.target.dataset.ui });
	};

	addToFavorites = hotel => {
		this.setState({ favorites: [...this.state.favorites, hotel] });
	};

	removeFromFavorites = hotel => {
		this.setState({
			favorites: this.state.favorites.filter(h => h.hotel_id !== hotel.hotel_id)
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
		console.log(json);
		this.setState({ hotels: json.hotels });
	};

	componentDidMount() {}

	render() {
		const { ui, hotels, userInput, favorites } = this.state;
		const fav_ids = favorites.map(hotel => hotel.hotel_id);
		return (
			<div className="container">
				<Nav ui={ui} changeUI={this.changeUI} />
				{ui === "search" ? (
					<Fragment>
						<SearchBar userInput={userInput} handleSearch={this.handleSearch} />
						<FilterBar favorites={favorites} />
						<div className="hotel-grid">
							{hotels.map(hotel => (
								<HotelCard
									key={hotel._source.hotel_id}
									hotel={hotel._source}
									favorite={fav_ids.includes(hotel._source.hotel_id)}
									add={this.addToFavorites}
									remove={this.removeFromFavorites}
								/>
							))}
						</div>
					</Fragment>
				) : (
					<Favorites favorites={favorites} remove={this.removeFromFavorites} />
				)}
			</div>
		);
	}
}

export default TodoDash;
