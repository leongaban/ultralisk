import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Particles from 'react-particles-js';

import * as api from '../services/api';

import particlesConfig from '../static/libs/particles.json'

// utils
import { round } from '../utils/math';

// Actions

// Containers

// Components

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    };
  }

  componentWillMount() {
    api.getLisk().then((lisk) => {
      this.setState({
        price: lisk.price_usd
      });
    });

    // particlesJS.load('particles-js', '/static/libs/particles.json', function() {
    //   console.log('callback - particles.js config loaded');
    // });
  }

  render() {
    const price = this.state.price;
    return (
      <div className="bg">
        <div className="main">
          <header>
            <div className="lisk-price">Lisk Price ${round(price)}</div>
            <nav>
              <ul>
                <li><a href="#about">About</a></li>
                <li><Link to={'/members'}>Members</Link></li>
                <li><a href="#about">My Rewards</a></li>
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
              <em className="ultra3">POOL</em>
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
