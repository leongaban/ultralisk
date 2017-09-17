import React, { Component } from 'react';

// Components

// Actions

// Containers

// Components

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
                <td>Required</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="static/imgs/ultralisk.png" alt="Ultralisk Lisk delegate" />
                  <a href="https://explorer.lisk.io/address/1605683440295884021L">ultralisk</a>
                </td>
                <td>336</td>
                <td className="dark-slate-gray bg-green">required</td>
              </tr>
              <tr>
                <td>
                  <img src="static/imgs/leon.png" alt="Leon Lisk delegate" />
                  <a href="https://explorer.lisk.io/address/16811843780664295310L">leon</a>
                </td>
                <td>365</td>
                <td className="dark-slate-gray bg-green">required</td>
              </tr>
              <tr>
                <td>
                  <img src="static/imgs/mrpibbs.png" alt="MrPibbs Lisk delegate" />
                  <a href="https://explorer.lisk.io/address/6421464900349122157L">mrpibbs</a>
                </td>
                <td>1062</td>
                <td className="bg-red">not required</td>
              </tr>
            </tbody>
          </table>

          <section className="changelly-section">
            <h2>Get Lisk via Changelly</h2>
            <iframe
              src="https://changelly.com/widget/v1?auth=email&from=BTC&to=LSK&merchant_id=167324d59a32&address=&amount=.015&ref_id=167324d59a32&color=594949"
              width="600"
              height="360"
              title="changelly"
              className="changelly"
              scrolling="no"
            />
          </section>
        </div>
      </section>
    );
  }
}

export default Members;
