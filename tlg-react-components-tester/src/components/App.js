import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import React, { Component } from "react";

import ReactColorSquare from "react-color-square";

import DayChecker from "./DayChecker";
import Header from "./Header";
import MealPlan from "./MealPlan";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <DayChecker />
        <MealPlan />
        <ReactColorSquare width={150} color="red" text="Hello World!" />
      </div>
    );
  }
}

export default App;
