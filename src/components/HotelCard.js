import React, { Component } from "react";
import HeartSelected from "../heart-selected.svg";
import HeartUnselected from "../heart-unselected.svg";

class HotelCard extends Component {
	setBgImage = background => {
		console.log("hey", background);
		return {
			backgroundImage: `linear-gradient( rgba(255,255,255,.6), rgba(255,255,255,.6) ), url(https://${background})`,
			backgroundSize: "cover",
			display: "flex",
			height: "300px",
			width: "100%",
			position: "relative"
		};
	};

	render() {
		const { hotel } = this.props;
		console.log(hotel.images[0].hotrooms_large_url);
		return (
			<div className="card">
				<div
					className="card-upper"
					style={this.setBgImage(hotel.images[0].hotrooms_large_url)}
				>
					<div className="card-heart">
						<img src={HeartSelected} alt="HeartSelected" />
					</div>
					<div className="hotel-name">{hotel.hotel_name}</div>
				</div>
				<div className="card-lower">Lower Card</div>
			</div>
		);
	}
}

export default HotelCard;
