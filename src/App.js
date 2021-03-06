import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import localforage from "localforage";
import HotelDash from "./components/HotelDash";
import Nav from "./components/Nav";
import Favorites from "./components/Favorites";
import "./App.css";

const NavRoute = withRouter(Nav);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favorites: []
		};
	}

	addToFavorites = hotel => {
		localforage.setItem("tabletHotel", [...this.state.favorites, hotel]);
		this.setState({ favorites: [...this.state.favorites, hotel] });
	};

	removeFromFavorites = hotel => {
		const favorites = this.state.favorites.filter(
			h => h.hotel_id !== hotel.hotel_id
		);
		this.setState({ favorites });
		localforage.setItem("tabletHotel", favorites);
	};

	componentDidMount() {
		localforage.getItem("tabletHotel").then(favorites => {
			if (favorites) {
				this.setState({ favorites });
			}
		});
	}

	render() {
		const { favorites } = this.state;
		return (
			<div className="App">
				<Router>
					<NavRoute />
					<Route
						exact
						path="/"
						render={props => (
							<HotelDash
								{...props}
								favorites={favorites}
								addToFavorites={this.addToFavorites}
								removeFromFavorites={this.removeFromFavorites}
							/>
						)}
					/>
					<Route
						exact
						path="/bookmarked-hotels"
						render={props => (
							<Favorites
								favorites={favorites}
								remove={this.removeFromFavorites}
							/>
						)}
					/>
				</Router>
			</div>
		);
	}
}

export default App;
