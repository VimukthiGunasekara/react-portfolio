import React from 'react';
import logo from '../../Assets/Images/profile-image.jpg';
import './About.css';

function About() {
  return (
    <div className="main-container mt-5 mb-5">
      <div className="container">
        <div className='jumbotron text-center'>
          <img className='profileImage' src={logo} alt="Logo" />
          <p className='fname'>Hi, I am <span className='name'> Vimukthi Gunasekara </span></p>
          <h1 className='title'>A Full-Stack Developer</h1>
          <p className='description'>Who is passionate about making contributing to open-source more approachable, creating technology to elevate people, and building community. I'm hold a BS.c in Information Technology from the University of Rajarata and a Certificate in Full Stack Web Development (ongoing) from the University of Toronto.Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development.Creativity, teamwork, and ability to develop projects from concept to completion are strong points. Furthermore, I'm an experienced mobile application developer Google Play Store 📱</p>
        </div>
        <div class="text-center">
          <a href="https://www.linkedin.com/in/vimukthi-gunasekara/"><i
            class="fab fa-linkedin-in social-icon"></i></a>
          <a href="https://github.com/VimukthiGunasekara"><i
            class="fab fa-github social-icon"></i></a>
          <a href="https://twitter.com/vimu_gunasekara"><i class="fab fa-twitter social-icon"></i></a>
          <a href="https://www.instagram.com/vimukthi_gunasekaraa/"><i
            class="fab fa-instagram social-icon"></i></a>
        </div>
      </div >
    </div >
  );
}

export default About;
