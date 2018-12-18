## FancyCheckboxTextInput Component

### Installation

`$ TBD...`

### How To Use

First import this component where you want to use it

`import { FancyCheckboxTextInput } from "tlg-react-components"`

Then just use it:

`<FancyCheckboxTextInput ... />`

### Props

| _Prop_      | _Description_                                      | _Default value_  |
| ----------- | :------------------------------------------------: | :--------------: |
| name        | Sets form name                                     | noname'          |
| text        | Sets control label                                 | Your text here'  |
| title       | Sets control title (user will see it while typing) | Your title here  |
| tickColor   | _self explicit_                                    | #0e3645          |
| squareColor | _self explicit_                                    | #cccccc          |
| maxLength   | _self explicit_                                    | 255              |
| onChange    | _self explicit_                                    | null             |

### Example

```
import React, { Component } from 'react';
import { FancyCheckboxTextInput } from 'tlg-react-components';

class App extends Component {

  ...

  render() {
    return (
      <div>
        <FancyCheckboxTextInput name="medicalDebt" text="I Have Medical Debt" title="Medical Debt" />
      </div>
    );
  }
}

export default App;
