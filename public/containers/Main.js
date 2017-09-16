import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import * as api from '../services/api';

// utils
import { round } from '../utils/math';

// Actions
// import {
//   addCurrentUser,
//   searchUser
// } from '../../actions';

// State Cleaner
// import { cleanMapStateToProps } from '../../utils/redux';

// Containers
// import Body from './Body';
// import ServicesContainer from '../Services/ServicesContainer';
// import UsersContainer from '../Users/usersContainer';

// Components
// import { Header, Sidebar } from '../../components';

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
            <img src="/static/imgs/gem.png" alt="gem" />
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
