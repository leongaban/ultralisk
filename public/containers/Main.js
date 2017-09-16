import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
    this.state = {};
  }

  render() {
    return (
      <div className="bg">
        <div className="main">
          <header className="hero">
            <img src="/static/imgs/gem.png" alt="gem" />
            <h1>
              <em className="ultra1">ULTRA</em>
              <em className="ultra2">LISK</em>
              <em className="ultra3">POOL</em>
            </h1>

            <section>
              <h3>Hello! We are a <strong><a href="https://lisk.io/">Lisk</a></strong> forging delegate pool.</h3>
              <ul>
                <li>Our rewards are 50% back to voters</li>
                <li>Small pool (7 members max)</li>
                <li>Weekly payouts (Minimum 1LSK)</li>
                <li>Current reward requirements: Vote for <a href="https://explorer.lisk.io/address/1605683440295884021L">ultralisk</a> & <a href="https://explorer.lisk.io/address/16811843780664295310L">leon</a></li>
              </ul>
            </section>
          </header>
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
