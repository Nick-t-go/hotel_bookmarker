import React, { Component } from "react";
import HeartSelected from "../heart-selected.svg";
import HeartUnselected from "../heart-unselected.svg";

class HotelCard extends Component {
	setBgImage = background => {
		return {
			backgroundImage: `linear-gradient( rgba(255,255,255,.6), rgba(255,255,255,.6) ), url(https://${background})`,
			backgroundSize: "cover",
			display: "flex",
			height: "300px",
			width: "100%",
			position: "relative"
		};
	};

	addFavorite = () => {
		this.props.add(this.props.hotel);
	};
	removeFavorite = () => {
		this.props.remove(this.props.hotel);
	};

	render() {
		const { hotel, favorite } = this.props;
		return (
			<div className="card">
				<div
					className="card-upper"
					style={this.setBgImage(hotel.images[0].hotrooms_large_url)}
				>
					<div className="card-heart">
						{favorite ? (
							<img
								src={HeartSelected}
								alt="HeartSelected"
								onClick={this.removeFavorite}
							/>
						) : (
							<img
								src={HeartUnselected}
								alt="HeartUnselected"
								onClick={this.addFavorite}
							/>
						)}
					</div>
					<div className="hotel-name">{hotel.hotel_name}</div>
				</div>
				<div className="card-lower">
					<li>{hotel.criteria.style}</li>
					<li>{hotel.criteria.atmosphere}</li>
				</div>
			</div>
		);
	}
}

export default HotelCard;
