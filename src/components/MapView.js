import React, { Component } from "react";
import L from "leaflet";
import {
	Map as LeafletMap,
	TileLayer,
	Rectangle,
	LayerGroup,
	Circle
} from "react-leaflet";

const outer = [[50.505, -29.09], [52.505, 29.09]];
const inner = [[49.505, -2.09], [53.505, 2.09]];
const center = [51.505, -0.09];
const rectangle = [[51.49, -0.08], [51.5, -0.06]];

export default class MapView extends Component<{}, State> {
	state = {
		bounds: outer
	};

	onClickInner = () => {
		this.setState({ bounds: inner });
	};

	onClickOuter = () => {
		this.setState({ bounds: outer });
	};

	render() {
		return (
			<LeafletMap
				bounds={this.state.bounds}
				style={{ height: "500px", width: "100vw" }}
			>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<LayerGroup>
					<Circle center={center} fillColor="blue" radius={200} />
					<Circle
						center={center}
						fillColor="red"
						radius={100}
						stroke={false}
					/>
					<LayerGroup>
						<Circle
							center={[51.51, -0.08]}
							color="green"
							fillColor="green"
							radius={100}
						/>
					</LayerGroup>
				</LayerGroup>
			</LeafletMap>
		);
	}
}
