import React from 'react';
import './Hero.css';
import Handicon from '../Assets/Hand Wave.gif';
import arrowgif from '../Assets/arrow.webp';
import heroimg from '../Assets/Hero.png';

const Hero = () => {
  return (
    
    <div className='hero'>
        
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={Handicon} alt='Hand wave icon' />
        </div>
        <div>
          <p className='tara'>collections</p>
          <p className='para'>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
          <img src={arrowgif} alt='Arrow' />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroimg} alt='Hero' />
      </div>
    </div>
  );
}

export default Hero;
