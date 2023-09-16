import React, { useState } from 'react';
import headimg from '../images/headimg.png';
import hero from '../images/hero.png';
import './Home.css'; // Import your CSS file

const Home = ({setShowForm, showForm}) => {
    const handleEnrollClick = () => {
        setShowForm(true);
      }
    
  return (
    <div className="home-container">
      <div className="content">
        <div className="left">
          <div className="heading">
            Learn <b className="bold-text">C/C++ Programming</b> with Seniors<span><img src={headimg} alt="head-img" /></span>
          </div>
          <div className="description">
            <p>
              Are you ready to embark on a transformative journey into the world of programming with C? This comprehensive course is tailored for beginners, equipping them with the essential skills and knowledge to become proficient in problem solving.
            </p>
          </div>
          <button className='enroll-button' onClick={handleEnrollClick}>
            <a href='#form'>
            Enroll Now🚀
            </a>
          </button>
        </div>
        <div className="right">
          <img src={hero} alt="hero-img" />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
