import React, { Component } from 'react';
import PropTypes from "prop-types";

class Address extends Component {
    constructor(props) {
        super(props);
        let thisState = this.props.ofcDetails;
        this.state = {
            title: thisState.title,
            street: thisState.street,
            city: thisState.city,
            state: thisState.state,
            pin: thisState.pin,
            phn: thisState.phn
        }
    }

  render() {
    return (
      <div className="addressDiv">
        <h3>{this.state.title}</h3>
        <label>Street:  <span>{this.state.street}</span> </label> <br/>
        <label>City:  <span>{this.state.city}</span> </label> <br/>
        <label>State:  <span>{this.state.state}</span> </label> <br/>
        <label>Pincode: <span>{this.state.pin}</span> </label> <br/>
        <label>PhoneNo:  <span>{this.state.phn}</span> </label>
      </div>
    );
  }
}

export default Address;
