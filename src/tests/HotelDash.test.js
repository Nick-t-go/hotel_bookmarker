import React from "react";
import { shallow } from "enzyme";
import HotelDash from "../components/HotelDash";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";

describe("HotelDash", () => {
	const setup = (props = {}, state = null) => {
		const wrapper = shallow(<HotelDash {...props} />);
		if (state) wrapper.setState(state);
		return wrapper;
	};

	it("should render a <div />", () => {
		const wrapper = setup();
		expect(wrapper.find("div").length).toEqual(1);
	});

	it("should render the Nav Component", () => {
		const wrapper = setup();
		expect(wrapper.containsMatchingElement(<Nav />)).toEqual(true);
	});

	it("should render the Nav Component", () => {
		const wrapper = setup();
		expect(wrapper.containsMatchingElement(<SearchBar />)).toEqual(true);
	});

	it("has ui that starts on search", () => {
		const wrapper = setup();
		const initialUIState = wrapper.state("ui");
		expect(initialUIState).toBe("search");
	});
});
