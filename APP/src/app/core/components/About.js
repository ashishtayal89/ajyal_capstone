import React, { Component } from 'react';
import PropTypes from "prop-types";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="about">
        <h1>About the Xebia group</h1>
        <h2>Our Identity</h2>

        <p>
          Xebia explores and creates new frontiers. Always one step ahead of what businesses need, we turn the latest technology trends into advantages for our customers. As a mainstream frontrunner, we create new solutions and build the future with our clients.
          <br />
          An international network of passionate technologists and pioneering craftsmen, Xebia provides the cutting-edge tools, training and consulting services that make businesses work better, smarter, and faster.
          </p>

        <h2>Xebia Group</h2>

        <p>
          Xebia Group consists of seven specialized, interlinked companies: Xebia, Xebia Academy, XebiaLabs, StackState, GoDataDriven, Xpirit and Binx.io. With offices in Amsterdam and Hilversum (Netherlands), Paris, Delhi, Bangalore and Boston, we employ over 700 people worldwide. In 2016, we generated 77 million in revenue.
        <br />
        Our services and product solutions address digital strategy; agile transformations; DevOps and continuous delivery; big data and data science; cloud infrastructures; agile software development; quality and test automation; and agile software security
        </p>

      </section>
    );
  }
}

export default About;
