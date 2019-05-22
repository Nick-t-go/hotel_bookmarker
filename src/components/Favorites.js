import React, { Component } from "react";

class Favorites extends Component {
	removeFavorite = e => {
		const { remove, favorites } = this.props;
		const id = Number(e.target.dataset.hotel_id);
		const hotelToBeRemoved = favorites.find(hotel => hotel.hotel_id === id);
		remove(hotelToBeRemoved);
	};

	render() {
		const { favorites } = this.props;
		return (
			<div>
				<div className="search-container">
					<div className="search-text">My Favorite Hotels</div>
				</div>
				<ul className="fav-list">
					{favorites.map(hotel => (
						<li key={hotel.hotel_id}>
							<a
								href={`https://www.tablethotels.com/${hotel.canonical_url}`}
								target="_blank"
								className="favorite"
							>
								{hotel.hotel_name}
							</a>
							<button
								onClick={this.removeFavorite}
								data-hotel_id={hotel.hotel_id}
								className="favorite-remove"
							>
								Remove
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Favorites;
