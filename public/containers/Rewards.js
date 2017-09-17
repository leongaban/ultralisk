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

class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header />
        <section>
          <h1>
            Ultralisk Rewards
          </h1>
        </section>
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

const RewardsContainer = withRouter(Rewards);
export default connect(null, null)(RewardsContainer);
