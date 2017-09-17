import React, { Component } from 'react';

// Components

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
      <section id="members">
        <div className="members-content">
          <h2>Ultralisk Members</h2>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Rank</td>
                <td>Forging</td>
                <td>Required</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://explorer.lisk.io/address/1605683440295884021L">ultralisk</a></td>
                <td>336</td>
                <td className="red">inactive</td>
                <td className="dark-slate-gray bg-green">required</td>
              </tr>
              <tr>
                <td><a href="https://explorer.lisk.io/address/16811843780664295310L">leon</a></td>
                <td>365</td>
                <td className="red">inactive</td>
                <td className="dark-slate-gray bg-green">required</td>
              </tr>
              <tr>
                <td><a href="https://explorer.lisk.io/address/6421464900349122157L">mrpibbs</a></td>
                <td>1062</td>
                <td className="red">inactive</td>
                <td className="bg-red">not required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
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

export default Members;
