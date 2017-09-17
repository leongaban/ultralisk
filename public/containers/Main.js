/* eslint-disable (no-multi-spaces) */
import React, { Component } from 'react';

// Components
import {
  Header,
  Hero,
  About,
  Members
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
        <div className="footer">
          <ul>
            <li>
              <a href="https://discord.gg/fkhNr2f" title="Our discord channel">
                <img src="static/imgs/discord.png" alt="Our discord channel" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/leongaban" title="Follow Leon on Twitter">
                <img src="static/imgs/twitter.png" alt="@leongaban" />
              </a>
            </li>
            <li>
              <a href="https://coinhover.io/" title="Coinhover crypto calculator">
                <img src="static/imgs/coinhover.png" alt="Coinhover crypto calculator" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainContainer;
