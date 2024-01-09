import React from 'react';
import './css/HeroSection.css'; // Assuming you have a separate CSS file
import heroImage from '../media/ass.png';


const HeroSection = ({ bannerText, aboutTitle, aboutText }) => {
    return (
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <div className="image-container">
            {/* <img src="https://media.licdn.com/dms/image/D5603AQEQ7HYqf3Wd3w/profile-displayphoto-shrink_800_800/0/1699404702054?e=2147483647&v=beta&t=ToaJSX_iv2_OYNRh3STOB1VZ7_3z42cMA1NXPtUhuF0" alt="Profile" /> */}
            <img src={heroImage} alt="Profile" />
            
          </div>
          <div className="text-container">
            <h2>{aboutTitle}</h2>
            <p>{aboutText}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;