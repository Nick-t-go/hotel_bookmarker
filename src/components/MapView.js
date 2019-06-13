import React, { Component } from "react";
import L from "leaflet";
import {
	Map as LeafletMap,
	TileLayer,
	Rectangle,
	FeatureGroup,
	Circle
} from "react-leaflet";

const outer = [[50.505, -29.09], [52.505, 29.09]];
const inner = [[49.505, -2.09], [53.505, 2.09]];
const center = [51.505, -0.09];
const rectangle = [[51.49, -0.08], [51.5, -0.06]];

export default class HotelDash extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bounds: outer,
			height: "300px"
		};

		this.myRef = React.createRef();
	}

	onClickInner = () => {
		this.setState({ bounds: inner });
	};

	onClickOuter = () => {
		this.setState({ bounds: outer });
	};

	layerAdd = e => {
		this.setState({ bounds: e.target.getBounds() });
	};

	load = e => {
		if (
			this.myRef.current &&
			this.state.height !==
				window.innerHeight - this.myRef.current.container.offsetTop
		) {
			this.setState({
				height:
					window.innerHeight - this.myRef.current.container.offsetTop
			});
		}
	};

	render() {
		const { hotels } = this.props;
		this.load();
		return (
			<LeafletMap
				onLoad={this.load}
				load={this.load}
				ref={this.myRef}
				bounds={this.state.bounds}
				style={{ height: this.state.height }}
				whenReady={this.load}
			>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<FeatureGroup onLayerAdd={this.layerAdd}>
					{hotels.map(hotel => (
						<Circle
							key={hotel._id}
							center={[
								hotel._source.coordinates.lat,
								hotel._source.coordinates.lon
							]}
							fillColor="blue"
							radius={200}
						/>
					))}
				</FeatureGroup>
			</LeafletMap>
		);
	}
}
