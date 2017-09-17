import React, { Component } from 'react';

// Components
import { Changelly, MembersTable } from '../components';

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
          <MembersTable />
          <Changelly />
        </div>
      </section>
    );
  }
}

export default Members;
