import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import 'pretty-checkbox';
import './FancyCheckboxTextInput.scss';

class FancyCheckboxTextInput extends Component {

  constructor(props) {
    super(props);

    this.svg_on =
`<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px" y="0px" viewBox="0 0 40 35" xml:space="preserve"
  >
  <style type="text/css">
    .st0 { fill: #fff; }
    .st1 { fill: {{{square_color}}}; }
    .st2 {
      fill: none;
      stroke: {{{tick_color}}};
      stroke-width: 6;
      stroke-linecap: round;
      stroke-miterlimit: 10;
    }
  </style>
  <path class="st0" d="M4.4,33.5c-1.6,0-2.9-1.3-2.9-2.9V10.5c0-1.6,1.3-2.9,2.9-2.9h20.1c1.6,0,2.9,1.3,2.9,2.9v20.1c0,1.6-1.3,2.9-2.9,2.9H4.4z" />
  <path class="st1" d="M24.5,9.1c0.7,0,1.4,0.6,1.4,1.4v20.1c0,0.7-0.6,1.4-1.4,1.4H4.4C3.6,32,3,31.4,3,30.6V10.5c0-0.7,0.6-1.4,1.4-1.4H24.5 M24.5,6.1H4.4C2,6.1,0,8.1,0,10.5v20.1C0,33,2,35,4.4,35h20.1c2.4,0,4.4-2,4.4-4.4V10.5C28.9,8.1,26.9,6.1,24.5,6.1L24.5,6.1z" />
  <path class="st2" d="M7.6,20.5l6.5,6.6c0.8,0.9,2.1,0.9,3,0c0,0,6.2-8.2,8.1-10.6c5-6.1,10.3-12.2,10.3-12.2" />
  </svg>`;
  ;

    this.state = Object.assign({}, {
      /* default argument values */
      name:         'noname',
      text:         'Your text here',
      title:        'Your title here',
      tickColor:    '#0e3645',
      squareColor:  '#ccc' ,
      maxLength:    255,
      onChange:     null,
    }, props);

    this.state.value = (this.state.value !== undefined && parseInt(this.state.value) > 0)? parseInt(this.state.value): '';

    this.mask = createNumberMask({
      prefix: '$ ',
    })
  }

  componentDidMount() {
    const thisRoot = ReactDOM.findDOMNode(this);
    const text = thisRoot.querySelector('input[type="text"]');
    text.setAttribute("maxlength", this.state.maxLength);
    this.configureCheckBox();
  }

  configureCheckBox() {
    const thisRoot = ReactDOM.findDOMNode(this);
    const text = thisRoot.querySelector('input[type="text"]');
    const checkbox = thisRoot.querySelector('input[type="checkbox"]');
    this.configureCheckBoxImage();
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        text.focus();
      }
      else {
        // simulating text change event as text="" when checkbox is disabled
        this.state.value = '';
        text.value = this.state.value;
        var event = document.createEvent("HTMLEvents");
        event.initEvent("change", false, true);
        text.addEventListener('change', (e) => {
          this.state.onChange(e);
        }, false);
        text.dispatchEvent(event);
      }
    });
    checkbox.checked = (this.state.value != '');
  }

  configureCheckBoxImage() {
    const thisRoot = ReactDOM.findDOMNode(this);
    const img_on = thisRoot.querySelector('.state.p-on > img');
    const img_off = thisRoot.querySelector('.state.p-off > img');
    let svg_on = this.svg_on;
    svg_on = svg_on.replace('{{{tick_color}}}', this.state.tickColor);
    svg_on = svg_on.replace('{{{square_color}}}', this.state.squareColor);
    let svg_off = svg_on.replace(/<.+?class="st2".+?>/, '');
    const svg_on_b64 = btoa(svg_on);
    const svg_off_b64 = btoa(svg_off);
    img_on.src = 'data:image/svg+xml;base64,' + svg_on_b64;
    img_off.src = 'data:image/svg+xml;base64,' + svg_off_b64;
  }

  render() {
    return (
      <div className="fancy-checkbox-text-input">
            <div className="pretty p-svg p-plain p-bigger p-toggle">
                <input type="checkbox" />
                <div className="state p-on">
                    <span className="title">{this.state.title}</span>
                    <img className="svg" />
                    <label>{this.state.text}</label>
                    { /* unfortunately data binding is not working with MaskedInput */ }
                    <MaskedInput type="text" name={this.state.name} placeholder="$ 0" mask={this.mask} value={this.state.value} onChange={this.state.onChange} />
                </div>
                <div className="state p-off">
                    <img className="svg" />
                    <label>{this.state.text}</label>
                </div>
            </div>
      </div>
    );
  }

}

export default FancyCheckboxTextInput;
