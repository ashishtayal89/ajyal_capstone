import React, { Component } from 'react';
import PropTypes from "prop-types";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <section className="home">
        <h1>Creating Digital Winners</h1>

        <p>
          We’re a group of highly ambitious craftsmen. From strategy to technology implementation, Xebia is a one-stop shop for full stack digital transformation.
        </p>

        <p>
          We provide innovative solutions and services to help your organization become a digital winner.
          We’re organized in specialized centers of excellence all over the world. We are like-minded individuals who aim for authority in our respective fields.
        </p>

        <h2>Our Guidance</h2>
        <p>
          Xebia Group companies operate on three distinct principles: Authority, Focus and Values. These principles guide every decision made by both management and staff. Authority means becoming the best in our field, individually and as a company. It’s an audacious goal that keeps us striving and fighting. We only hire people who have achieved authority, not for growth, open positions, size or value.
          <ul>
            <li>People First</li>
            <li>Sharing Knowledge</li>
            <li>Customer Intimacy</li>
            <li>Quality without Compromise</li>
          </ul>
        </p>
      </section>
    );
  }
}

export default Home;
