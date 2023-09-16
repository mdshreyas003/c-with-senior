import React from 'react';
import shreyas from '../images/shreyas.jpeg'; // Add the correct image path
import srujan from '../images/srujan.jpeg'; // Add the correct image path
import './Founders.css'; // Import your CSS file

function Founders() {
  return (
    <div className='founders'>
        <h1>Founders</h1>
        <div className='founder'>
            <img src={shreyas} alt="Shreyas Mohite" className="founder-img" />
            <h4>Shreyas</h4>
            <p>E-yantra finalist 2023🥇</p>
            <p>3⭐ coder on codechef</p>
        </div>
        <div className='founder'>
            <img src={srujan} alt="Srujan Hukerikar" className="founder-img" />
            <h4>Srujan</h4>
            <p>Winner brain-it-on🏆</p>
            <p>Contact: 7083465918</p>
        </div>
    </div>
  )
}

export default Founders;
