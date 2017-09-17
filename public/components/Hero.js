import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../static/libs/particles.json';

const Hero = () => (
  <main className="hero">
    <div className="particles-container">
      <Particles params={particlesConfig} />
    </div>

    <div className="obelisk">
      <img src="/static/imgs/gem.png" alt="gem" />
    </div>

    <h1>
      <em className="ultra1">ULTRALISK</em>
      <em className="dim-gray">POOL</em>
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
  </main>);

export default Hero;
