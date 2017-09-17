/* eslint-disable (max-len) */
import React, { Component } from 'react';
import * as api from '../services/api';

// utils
import { round, roundUSD } from '../utils/math';

class Header extends Component {
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

  scrollToAbout(view) {
    this.aboutDiv = document.getElementById(view);
    this.aboutDiv.tabIndex = '-1';
    this.aboutDiv.focus();
  }

  render() {
    const price = this.state.price;
    return (
      <header>
        <div className="lisk-price" title={roundUSD(price)}>Lisk Price ${round(price)}</div>
        <nav>
          <ul>
            <li><button onClick={() => this.scrollToAbout('about')}>About</button></li>
            <li><a href="https://medium.com/ultralisk">Blog</a></li>
            <li><button onClick={() => this.scrollToAbout('members')}>Members</button></li>
            <li><a href="#rewards" title="Your lisk rewards">My Rewards</a></li>
          </ul>
        </nav>
      </header>);
  }
}

export default Header;
