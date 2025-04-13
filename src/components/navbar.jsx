import React from 'react';
import "../css/navbar.css";
import { FaTachometerAlt, FaFileAlt, FaIdCard, FaUsers, FaBed, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="brand">
        {false ? (
          <>
            <img src="/logo.png" alt="Logo" className="logo" />
            <div className="brand-text">
              <h3>HORIZON</h3>
              <p>National Institute of Technology, Hamirpur</p>
            </div>
          </>
        ) : (
          <>
            <div className="button-cont-nav">
              <div className="login-btn">Login</div>
              <div className="signup-btn">Sign Up</div>
            </div>
          </>
        )}

      </div>

      <ul className="nav-links">
        <li><FaTachometerAlt /><span>Dashboard</span></li>
        <li><FaFileAlt /><span>Complaints</span></li>
        <li><FaIdCard /><span>Outpass</span></li>
        <li><FaUsers /><span>Student Management</span></li>
        <li><FaBed /><span>Hostel Allotment</span></li>
        <li><FaCog /><span>Settings</span></li>
        <li><FaFileAlt /><span>Preferences</span></li>
      </ul>

      <div className="logout">
        <FaSignOutAlt /><span>Logouts</span>
      </div>
    </div>
  );
};

export default Navbar;
