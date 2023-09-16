import React from 'react';
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <div className="footer">
        <h3>Contact Us</h3>
      <div className="contact-info">
        <div className="founder-contact">
          <h4>Shreyas Mohite</h4>
          <p>Email: shreyasmohite1203@gmail.com</p>
          <p>Phone: 9356979479</p>
        </div>
        <div className="founder-contact">
          <h4>Srujan Hukerikar</h4>
          <p>Email: srujanhukerikar21@gmail.com</p>
          <p>Phone: 7083465918</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
