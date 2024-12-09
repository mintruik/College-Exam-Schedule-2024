import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';

const Header = () => (
  <header>
    <img src={logo} alt="University Logo" style={{ width: 100, height: 100 }} />
    <h1>GURUGRAM UNIVERSITY, GURUGRAM</h1>
    <h2>College Exam Schedule 2024</h2>
    <div className="shift-timings">
      <div className="shift-time">Morning Shift: 09:30 AM to 12:30 PM</div>
      <div className="shift-time">Evening Shift: 2:00 PM to 5:00 PM</div>
    </div>
    <p>Find your exam details easily</p>
  </header>
);

export default Header; 