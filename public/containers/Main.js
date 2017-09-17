/* eslint-disable (max-len) */
/* eslint-disable (no-multi-spaces) */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Particles from 'react-particles-js';

import * as api from '../services/api';

import particlesConfig from '../static/libs/particles.json';

// utils
import { round, roundUSD } from '../utils/math';

// Actions

// Containers

// Components

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    };

    this.scrollToAbout = this.scrollToAbout.bind(this);
  }

  componentWillMount() {
    api.getLisk().then((lisk) => {
      this.setState({
        price: lisk.price_usd
      });
    });
  }

  scrollToAbout() {
    this.aboutDiv = document.getElementById('about');
    this.aboutDiv.tabIndex = '-1';
    this.aboutDiv.focus();
  }

  render() {
    const price = this.state.price;
    return (
      <div className="bg">
        <div className="main">
          <header>
            <div className="lisk-price" title={roundUSD(price)}>Lisk Price ${round(price)}</div>
            <nav>
              <ul>
                <li>
                  <button onClick={() => this.scrollToAbout()}>About</button>
                  {/* <a href="#about" title="About Ultralisk">About</a> */}
                </li>
                <li><a href="#members" title="All Ultralisk Members">Members</a></li>
                <li><a href="#rewards" title="Your lisk rewards">My Rewards</a></li>
              </ul>
            </nav>
          </header>

          <main className="hero">
            <div className="particles-container">
              <Particles params={particlesConfig} />
            </div>

            <div className="obelisk">
              <img src="/static/imgs/gem.png" alt="gem" />
            </div>

            <h1>
              <em className="ultra1">ULTRALISK</em>
              <em className="dim-gray">POOL</em>
            </h1>

            <section>
              <h3>Hello! We are a passionate <strong><a href="https://lisk.io/">Lisk</a></strong> forging delegate pool.</h3>
              <ul>
                <li>Our rewards are 50% back to voters</li>
                <li>Small pool (7 members max)</li>
                <li>Weekly payouts (Minimum 1 LSK)</li>
                <li>Current reward requirements: Vote for <a href="https://explorer.lisk.io/address/1605683440295884021L">ultralisk</a> & <a href="https://explorer.lisk.io/address/16811843780664295310L">leon</a></li>
              </ul>
            </section>
          </main>

          <section id="about">
            <h1>About Us</h1>
            <p>We are a group of developers, cryptocurrency enthusiasts and friends. As such, we are huge fans of Lisk and all the potential it brings to help expand and grow adoption of blockchain technology.</p>

            <p>This is the dawn of the Internet of Money, and with that comes all the benefits of Decentralized systems and apps. People gaining control back of their own money, new assets being created as better stores of value and wealth, and antiquated financial systems which are prone to hacks being disrupted.</p>

            <p><strong>Lisk</strong> is platform which will help drive this progress forward. And we are here to support the network and give back to the community.</p>
          </section>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
// view: state.globalReducer.view,
// currentUser: state.globalReducer.currentUser
// });

// const mapDispatchToProps = dispatch => ({
// searchUser: (user) => { dispatch(searchUser(user)); },
// addCurrentUser: (user) => { dispatch(addCurrentUser(user)); }
// });

const MainContainer = withRouter(Main);
export default connect(null, null)(MainContainer);
