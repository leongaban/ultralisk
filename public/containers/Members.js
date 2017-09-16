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

class Members extends Component {
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
            Ultralisk Members
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

const MembersContainer = withRouter(Members);
export default connect(null, null)(MembersContainer);
