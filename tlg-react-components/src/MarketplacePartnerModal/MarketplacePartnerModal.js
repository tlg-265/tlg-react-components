import React, { Component } from 'react';
import './MarketplacePartnerModal.scss';
import Popup from "reactjs-popup";

class MarketplacePartnerModal extends Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({}, {
      /* default argument values */
      open:                 false,
      logo:                 '',
      marketplacePartners:  [],
      buttonCloseColor:     '#71c12c',
      rowColor:             '#dddbcf',
    }, props);

  }

  show() {
    this.setState({ open: true });
  }

  hide() {
    this.setState({ open: false });
  }

  componentWillReceiveProps = (nextProps) => {
    if (JSON.stringify(this.state.marketplacePartners) !== JSON.stringify(nextProps.marketplacePartners)) {
      this.setState({ marketplacePartners: nextProps.marketplacePartners });
    }
  }

  render() {
    let buttonCloseStyle = {
      backgroundColor: this.state.buttonCloseColor,
    };
    let trOdd = {
      backgroundColor: this.state.rowColor,
    };
    let trEven = {};
    return (
      <div className="marketplace-partner-modal">
        <Popup
          modal
          open={this.state.open}
          onClose={ () => { this.hide(); }}
        >
        {close => (
          <div className={'modal' + ((this.isIphone5())? ' iphone5': '')}>
            <button className="button_close" onClick={close} style={buttonCloseStyle}>&times;</button>
            {
              this.logo !== '' &&
              <img src={this.state.logo} className="logo" alt="Logo" />
            }
            <div className="header">Our Marketplace Partners:</div>
            <div className="content">
              {
                (this.state.marketplacePartners.length > 0) ?
                  (
                    <table>
                      <tbody>
                      <tr>
                        <th>Partner</th>
                        <th>
                          {
                            (this.state.marketplacePartners.length > 0 && this.state.marketplacePartners[0].length > 1)? 'License Number': ''
                          }
                        </th>
                      </tr>
                      {
                        this.state.marketplacePartners.map((partner, index) => {
                          return (
                            <tr key={'index-' + index} style={ (index % 2 === 0)? trOdd: trEven }>
                              <td>{partner[0]}</td>
                              <td>
                                {
                                  (partner.length > 1)? partner[1]: ''
                                }
                              </td>
                            </tr>
                          )
                        })
                      }
                      </tbody>
                    </table>
                  ): (
                    <div className="spinner"></div>
                  )
              }
            </div>
          </div>
        )}
        </Popup>
      </div>
    );
  }
  
  isIphone() {
    return !!navigator.userAgent.match(/iPhone/i);
  }

  iPhoneVersion() {
    var iHeight = window.screen.height;
    var iWidth = window.screen.width;
  
    if (iWidth === 414 && iHeight === 896) {
      return "Xmax-Xr";
    }
    else if (iWidth === 375 && iHeight === 812) {
      return "X-Xs";
    }
    else if (iWidth === 320 && iHeight === 480) {
      return "4";
    }
    else if (iWidth === 375 && iHeight === 667) {
      return "6";
    }
    else if (iWidth === 414 && iHeight === 736) {
      return "6+";
    }
    else if (iWidth === 320 && iHeight === 568) {
      return "5";
    }
    else if (iHeight <= 480) {
      return "2-3";
    }
    return 'none';
  }

  isIphone5() {
    return (this.isIphone() && this.iPhoneVersion() === '5');
  }

}

export default MarketplacePartnerModal;
