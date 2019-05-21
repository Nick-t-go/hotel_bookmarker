import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import HotelDash from "../components/HotelDash";

describe("App", () => {
	let wrapper;
	beforeEach(() => (wrapper = shallow(<App />)));

	it("should render a <div />", () => {
		expect(wrapper.find("div").length).toEqual(1);
	});

	it("should render the HotelDash Component", () => {
		expect(wrapper.containsMatchingElement(<HotelDash />)).toEqual(true);
	});
});
