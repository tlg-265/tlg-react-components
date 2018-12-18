import React, { Component } from "react";

import { ReactColorSquare, FancyCheckboxTextInput } from "tlg-react-components";

class App extends Component {
  render() {
    return (
      <div className="container">

        <ReactColorSquare width={150} color="red" text="Hello World!" />

        <div style={{ width: '500px' }}>
          <FancyCheckboxTextInput name="debt_01" text="I Have Debt 01" title="Debt 01" />
        </div>
        <div style={{ width: '500px' }}>
          <FancyCheckboxTextInput name="debt_02" text="I Have Debt 02" title="Debt 02" />
        </div>
        <div style={{ width: '500px' }}>
          <FancyCheckboxTextInput name="debt_03" text="I Have Debt 03" title="Debt 03" />
        </div>

      </div>
    );
  }
}

export default App;
