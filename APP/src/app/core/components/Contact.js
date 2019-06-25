import React, { Component } from 'react';
import Address from './Address';
import PropTypes from "prop-types";

class Contact extends Component {
    constructor(props) {
        console.log("Contact costructor")
        super(props);
        this.state = {
          hofc: {
            title: "Xebia Group",
            street: "Laapersveld 271213 VB Hilversum",
            city: "Hilversum",
            state: "Hilversum",
            pin: "271213",
            phn: "+31 (0)35 538 1921"},
          bofc: {
            title: "Xebia India Gurgaon",
            street: "612 Park Centra , Sector 30 Gurgaon 122002 Haryana",
            city: "Gurgaon",
            state: "Haryana",
            pin: "122002",
            phn: "+91 (0124) 470 0200"
          }
        }
    }

  render() {
    return (
      <section className="home">
          <h1>Get in touch with Xebia</h1>
          <hr />
          <Address ofcDetails={this.state.hofc} />
          <Address ofcDetails={this.state.bofc} />
      </section >
    );
  }
}

export default Contact;