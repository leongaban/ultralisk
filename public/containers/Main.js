/* eslint-disable (no-multi-spaces) */
import React, { Component } from 'react';

// Components
import {
  Header,
  Hero,
  About
} from '../components';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    };
  }

  render() {
    return (
      <div className="bg">
        <div className="main">
          <Header />
          <Hero />
          <About />
        </div>
      </div>
    );
  }
}

export default MainContainer;
