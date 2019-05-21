import React, { Component } from "react";
import HotelDash from "./components/HotelDash";
import logo from "./tablet-logo-445x110@2x.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HotelDash />
      </div>
    );
  }
}

export default App;
