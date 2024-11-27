import React, { useState } from 'react';
import MyImage from '../assets/kerich.png'; 
import { FaLaptopCode, FaSearch, FaShieldAlt, FaChalkboardTeacher } from 'react-icons/fa'; 
import './About.css'; 

const About = () => {
  
  const [isExpanded, setIsExpanded] = useState(false);

 
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-image">
          <img src={MyImage} alt="Emmanuel Kerich" />
        </div>

        <div className="about-content">
          <h1>Pick My Brain</h1>
          <p>
            My name is Emmanuel Kerich, a passionate Web Developer dedicated to helping small businesses, freelancers, and NGOs create responsive and visually appealing web designs that align with their goals and brand identity. I specialize in crafting user-friendly websites that not only showcase the full potential of your business but also help you leverage social media to boost your online presence and engagement.
            <br /><br />
            Beyond web development, I am also an <strong>SEO Specialist</strong>, ensuring your website ranks higher on search engines and drives organic traffic. As a Web Quality Assurance Specialist, I focus on delivering error-free, secure, and optimized websites. Additionally, I serve as a Tech Consultant, providing expert advice to help businesses navigate the ever-evolving digital landscape.
            <br /><br />
            {isExpanded && (
              <>
            I aim to be more than just a developer—I strive to be a business partner, collaborating with you to achieve your objectives and unlock new growth opportunities.
            <br /><br />
            Let’s work together to build a digital presence that empowers your business to thrive.
            
            
            
              
                <br /><br />
                I believe in long-term relationships with my clients and offer continuous support. Whether you need a website revamp or ongoing SEO services, I am here to assist you every step of the way. Let’s turn your ideas into reality and create impactful digital experiences together.
              </>
            )}
          </p>

         
          <button onClick={toggleContent} className="read-more-btn">
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>My Services</h2>
        <div className="services-list">
          <div className="service-item">
            <FaLaptopCode size={40} color="#4CAF50" />
            <h3>Web Development</h3>
            <p>Creating responsive and engaging websites tailored to your business needs.</p>
          </div>
          <div className="service-item">
            <FaSearch size={40} color="#FFC107" />
            <h3>SEO Optimization</h3>
            <p>Improving your website’s visibility on search engines to drive organic traffic.</p>
          </div>
          <div className="service-item">
            <FaShieldAlt size={40} color="#2196F3" />
            <h3>Quality Assurance</h3>
            <p>Ensuring that your website runs smoothly, is secure, and optimized for performance.</p>
          </div>
          <div className="service-item">
            <FaChalkboardTeacher size={40} color="#FF5722" />
            <h3>Tech Consulting</h3>
            <p>Providing expert advice to help your business navigate the digital landscape.</p>
          </div>
        </div>
      </div>

      
      <div className="cta-section">
        <h2>Ready to Grow Your Business?</h2>
        <p>Let's work together to create a website that stands out and drives results. Contact me today to get started!</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>
    </div>
  );
};

export default About;
