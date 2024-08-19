import React from 'react';
import './Home.css'; // Import the corresponding CSS file for styling
import logo from './logo.png'; // Ensure the path is correct
import heroGif from './homepage-hero.gif'; // Ensure the path is correct

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        {/* Add the logo here */}
        <img src={logo} alt="AccuKnox Logo" className="home-logo" />
        <nav className="home-nav">
          <a href="#products" className="nav-link">PRODUCTS</a>
          <a href="#solutions" className="nav-link">SOLUTIONS</a>
          <a href="#open-source" className="nav-link">OPEN SOURCE</a>
          <a href="#resources" className="nav-link">RESOURCES</a>
          <a href="#company" className="nav-link">COMPANY</a>
          <a href="#partners" className="nav-link">PARTNERS</a>
          <a href="#search" className="nav-link">🔍</a>
          <button className="demo-button">GET A DEMO</button>
        </nav>
      </header>
      
      <section className="home-hero-section">
        <div className="home-hero">
          <h1>Zero Day Attacks Are Headline News Every Day</h1>
          <p className="hero-subtitle">You need a Zero Trust Cloud Security Solution</p>
          <p className="hero-description">We deliver Cloud Native Application Protection Platform (CNAPP) with 33+ Compliance standards including CSPM, CWPP, ASPM, KIEM powered by Gen-AI.</p>
        </div>

        {/* Add the GIF here */}
        <div className="hero-image-container">
          <img src={heroGif} alt="Hero Graphic" className="hero-gif"/>
        </div>
      </section>

      <div className="hero-buttons">
        <button className="hero-button schedule-meeting">SCHEDULE A MEETING</button>
        <button className="hero-button latest-attacks">LATEST ATTACKS</button>
      </div>
    </div>
  );
};

export default Home;
