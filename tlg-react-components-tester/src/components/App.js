import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { ReactColorSquare, FancyCheckboxTextInput, MarketplacePartnerModal } from "tlg-react-components";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({}, {
      /* default argument values */
      marketplacePartners: [
        [ 'Partner 01', 'License 01' ],
        [ 'Partner 02', 'License 02' ],
        [ 'Partner 03', 'License 03' ],
        [ 'Partner 04', 'License 04' ],
        [ 'Partner 05', 'License 05' ],
        [ 'Partner 06', 'License 06' ],
        [ 'Partner 01', 'License 01' ],
        [ 'Partner 02', 'License 02' ],
        [ 'Partner 03', 'License 03' ],
        [ 'Partner 04', 'License 04' ],
        [ 'Partner 05', 'License 05' ],
        [ 'Partner 06', 'License 06' ],
        [ 'Partner 01', 'License 01' ],
        [ 'Partner 02', 'License 02' ],
        [ 'Partner 03', 'License 03' ],
        [ 'Partner 04', 'License 04' ],
        [ 'Partner 05', 'License 05' ],
        [ 'Partner 06', 'License 06' ],
        [ 'Partner 01', 'License 01' ],
        [ 'Partner 02', 'License 02' ],
        [ 'Partner 03', 'License 03' ],
        [ 'Partner 04', 'License 04' ],
        [ 'Partner 05', 'License 05' ],
        [ 'Partner 06', 'License 06' ],
        [ 'Partner 01', 'License 01' ],
        [ 'Partner 02', 'License 02' ],
        [ 'Partner 03', 'License 03' ],
        [ 'Partner 04', 'License 04' ],
        [ 'Partner 05', 'License 05' ],
        [ 'Partner 06', 'License 06' ],
        [ 'Partner 01', 'License 01' ],
        [ 'Partner 02', 'License 02' ],
        [ 'Partner 03', 'License 03' ],
        [ 'Partner 04', 'License 04' ],
        [ 'Partner 05', 'License 05' ],
        [ 'Partner 06', 'License 06' ],
        [ 'Partner 01', 'License 01' ],
        [ 'Partner 02', 'License 02' ],
        [ 'Partner 03', 'License 03' ],
        [ 'Partner 04', 'License 04' ],
        [ 'Partner 05', 'License 05' ],
        [ 'Partner 06', 'License 06' ],
      ],
    }, props);

  }

  componentDidMount() {
    const thisRoot = ReactDOM.findDOMNode(this);
    const whatever_child = thisRoot.querySelector('.whatever_child');
    console.log(whatever_child);
  }

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
          [ 'Partner 04', 'License 04' ],
          [ 'Partner 05', 'License 05' ],
          [ 'Partner 06', 'License 06' ],
          [ 'Partner 01', 'License 01' ],
          [ 'Partner 02', 'License 02' ],
          [ 'Partner 03', 'License 03' ],
          [ 'Partner 04', 'License 04' ],
          [ 'Partner 05', 'License 05' ],
          [ 'Partner 06', 'License 06' ],
          [ 'Partner 01', 'License 01' ],
          [ 'Partner 02', 'License 02' ],
          [ 'Partner 03', 'License 03' ],
          [ 'Partner 04', 'License 04' ],
          [ 'Partner 05', 'License 05' ],
          [ 'Partner 06', 'License 06' ],
          [ 'Partner 01', 'License 01' ],
          [ 'Partner 02', 'License 02' ],
          [ 'Partner 03', 'License 03' ],
          [ 'Partner 04', 'License 04' ],
          [ 'Partner 05', 'License 05' ],
          [ 'Partner 06', 'License 06' ],
          [ 'Partner 01', 'License 01' ],
          [ 'Partner 02', 'License 02' ],
          [ 'Partner 03', 'License 03' ],
          [ 'Partner 04', 'License 04' ],
          [ 'Partner 05', 'License 05' ],
          [ 'Partner 06', 'License 06' ],
          [ 'Partner 01', 'License 01' ],
          [ 'Partner 02', 'License 02' ],
          [ 'Partner 03', 'License 03' ],
          [ 'Partner 04', 'License 04' ],
          [ 'Partner 05', 'License 05' ],
          [ 'Partner 06', 'License 06' ],
          [ 'Partner 01', 'License 01' ],
          [ 'Partner 02', 'License 02' ],
          [ 'Partner 03', 'License 03' ],
          [ 'Partner 04', 'License 04' ],
          [ 'Partner 05', 'License 05' ],
          [ 'Partner 06', 'License 06' ],
        ]
      });
    }, 1000);
  }

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

        <MarketplacePartnerModal
          open={false}
          ref="modal_marketplace_partners"
          logo="https://d36wlm0wgeem6j.cloudfront.net/img/logo.png?v=##BUILD_NUMBER##"
          marketplacePartners={this.state.marketplacePartners}
          buttonCloseColor="#71c12c"
          rowColor="#dddbcf"
        />

        <a href="/" onClick={ this.makeAjaxCall }>Marketplace Partners</a>

      </div>
    );
  }
}

export default App;
