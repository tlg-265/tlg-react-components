## MarketplacePartnerModal Component

### Installation

`$ TBD...`

### How To Use

First import this component where you want to use it

`import { MarketplacePartnerModal } from "tlg-infra"`

Then just use it:

`<MarketplacePartnerModal ... />`

### Props

| _Prop_           | _Description_         | _Default value_ |
| ---------------- | :-------------------: | :-------------: |
| open             | Sets background color |  false          |
| logo             | Sets logo             |  _empty string_ |
| partners         | Sets partners (array) |  []             |
| buttonCloseColor | _self explicit_       |  #71c12c        |
| rowColor         | _self explicit_       |  #dddbcf        |

### Example

```
import React, { Component } from 'react';
import { MarketplacePartnerModal } from 'tlg-infra';

class App extends Component {

  ...

  makeAjaxCall = (event) => {
    event.preventDefault();
    this.refs.modal_marketplace_partners.show();
    
    // whatever Ajax call here and after finshed, do the following:
    // simulating delay with: "setTimeout"...

    setTimeout(() => {
      this.setState({
        marketplacePartners: [
          [ 'Partner 01', 'License 01' ],
          [ 'Partner 02', 'License 02' ],
          [ 'Partner 03', 'License 03' ],
        ]
      });
    }, 1000);
  }

  ...

  render() {
    return (
      <div>
        <MarketplacePartnerModal
          open={false}
          ref="modal_marketplace_partners"
          logo="https://d36wlm0wgeem6j.cloudfront.net/img/logo.png?v=##BUILD_NUMBER##"
          partners={this.state.partnerList}
          buttonCloseColor="#71c12c"
          rowColor="#dddbcf"
        />
        <a href="/" onClick={ this.makeAjaxCall }>Marketplace Partners</a>
      </div>
    );
  }
}

export default App;
