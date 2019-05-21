import React, { Component } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import HotelCard from "./HotelCard";

class TodoDash extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ui: "search",
			favorites: [],
			search: null,
			hotels: []
		};
	}

	changeUI = e => {
		this.setState({ ui: e.target.dataset.ui });
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
		const { ui, userInput, hotels } = this.state;
		return (
			<div className="container">
				<Nav ui={ui} changeUI={this.changeUI} />
				<SearchBar userInput={userInput} handleSearch={this.handleSearch} />
				<FilterBar />
				<div className="hotel-grid">
					{hotels.map(hotel => (
						<HotelCard key={hotel._id} hotel={hotel._source} />
					))}
				</div>
			</div>
		);
	}
}

export default TodoDash;
