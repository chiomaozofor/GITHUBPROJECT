import React from 'react';
import './Hero.css'
function Hero() {
  return (
    <section className="hero">
      <h1>Build and ship software on a single, collaborative platform</h1>
      <p className='p1'>
        Join the world's most widely adopted AI-powered developer platform
      </p>
      <div className='sign-Z'>
      <div className='sign-up'>
        <input placeholder='ENTER YOUR EMAIL' type="text"/>
      <button className="btn get-started">Sign-up for GitHub</button>
      </div>
      <p className='p2'>Try Github Copilot</p>
      </div>
      <div className='vid'></div>
      <video muted playsInline src="https://github.githubassets.com/assets/code-1_desktop-7ab52aea3358.mp4"></video>
    </section>
  );
}

export default Hero;