import React from 'react';

const Changelly = () => (
  <section className="changelly-section">
    <h2>Get Lisk via Changelly</h2>
    <div className="hide-640">
      <iframe
        src="https://changelly.com/widget/v1?auth=email&from=BTC&to=LSK&merchant_id=167324d59a32&address=&amount=.015&ref_id=167324d59a32&color=594949"
        width="600"
        height="360"
        title="changelly"
        className="changelly"
        scrolling="no"
      />
    </div>

    <div className="show-640">
      <iframe
        src="https://changelly.com/widget/v1?auth=email&from=BTC&to=LSK&merchant_id=167324d59a32&address=&amount=.015&ref_id=167324d59a32&color=594949"
        width="540"
        height="360"
        title="changelly"
        className="changelly"
        scrolling="no"
      />
    </div>
  </section>);

export default Changelly;
