import React from 'react';
import './header.css';
import Image from '../../assets/images/avatar.png';


const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_content">
          <div className="header_text">
            <h1>Hi, I'm Edward Lui</h1>
            <h2>Full-stack developer</h2>
            <button className="know_more_button" onClick={() => window.location.href = '#about'}>
              Want to know more? Click me!
            </button>
          </div>
          <div className="header_image">
            <img src={Image} alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header