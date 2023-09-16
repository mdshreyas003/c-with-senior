import React from 'react';
import feature1 from '../images/feature1.svg';
import feature2 from '../images/feature2.svg';
import feature3 from '../images/feature3.svg';
import feature4 from '../images/feature4.svg';
import './Features.css'; // Import your CSS file

function Features() {
  return (
    <div className="features-container">
      <div className="heading">
        <h6>SENIOR IS THE</h6>
        <h2>
          Ultimate launchpad
          for your Coding
          journey!
        </h2>
      </div>
      <div className="features-list">
        <div className="featurecard">
            <div className='img-center'>          
                <img src={feature1} alt="Feature 1" />
          </div>
          <h2>INSTANT DOUBT SUPPORT</h2>
          <p>
            For instant doubt support, There is a dedicated group.
            In addition, we have a dedicated sessions for doubt solving.
          </p>
        </div>
        <div className="featurecard">
            <div className='img-center'>
          <img src={feature2} alt="Feature 2" />
          </div>
          <h2>LIVE CODECLASS</h2>
          <p>
            We hold regular live codeclasses in college. Voting for topics is done by the community members themselves.
          </p>
        </div>
        <div className="featurecard">
            <div className='img-center'>
          <img src={feature3} alt="Feature 3" />
          </div>
          <h2>DAILY PRACTICE PROBLEMS</h2>
          <p>
            We have practice problems on every day.
            There are also sessions dedicated to explanations for them as well.
          </p>
        </div>
        <div className="featurecard">
            <div className='img-center'>
          <img src={feature4} alt="Feature 4" />
          </div>
          <h2>MENTORSHIP SESSIONS</h2>
          <p>
            On a regular basis, we have mentorship sessions on a variety of topics.
            CP, developement and many other topics have been discussed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
