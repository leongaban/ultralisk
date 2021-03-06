import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../static/libs/particles.json';

const Hero = () => (
  <main className="hero">
    <div className="particles-container">
      <Particles params={particlesConfig} />
    </div>

    <div className="obelisk hide-720">
      <img src="/static/imgs/gem.png" alt="gem" />
    </div>

    <div className="obelisk show-720">
      <img src="/static/imgs/gem_small.png" alt="gem" />
    </div>

    <h1>
      <em className="ultra1">ULTRALISK</em>
      <em className="dim-gray">POOL</em>
    </h1>

    <section>
      <h3>Hello! We are a passionate <a href="https://lisk.io/">Lisk</a> forging delegate pool.</h3>
      <ul className="bullet-points">
        <li>Our rewards are 50% back to voters</li>
        <li>Small pool (7 members max)</li>
        <li>Weekly payouts (Minimum 1 LSK)</li>
        <li>Current reward requirements: Vote for <a href="https://explorer.lisk.io/address/1605683440295884021L" title="Lisk delegate Ultralisk">ultralisk</a> & <a href="https://explorer.lisk.io/address/16811843780664295310L" title="Lisk delegate Leon">leon</a></li>
      </ul>
    </section>
  </main>);

export default Hero;
