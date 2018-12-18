import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import React, { Component } from "react";

import { ReactColorSquare } from "tlg-react-components";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ReactColorSquare width={150} color="red" text="Hello World!" />
      </div>
    );
  }
}

export default App;
