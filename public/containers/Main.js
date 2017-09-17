/* eslint-disable (no-multi-spaces) */
import React, { Component } from 'react';

// Components
import {
  Header,
  Hero,
  About,
  Members,
  Footer
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
          <Members />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
