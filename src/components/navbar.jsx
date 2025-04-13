import React from 'react';
import "../css/navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
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
              <div className="login-btn" onClick={() => navigate("/login")}>Login</div>
              <div className="signup-btn" onClick={() => navigate("/signup")}>Sign Up</div>
            </div>
          </>
        )}

      </div>

      <ul className="nav-links">
        <NavLink to={"/dashboard"} className={({ isActive }) => (isActive ? 'active' : '')}><li><DashboardIcon sx={{height:"70%",width:'auto'}} /><span>Dashboard</span></li></NavLink>

        <NavLink to={"/"} className={({ isActive }) => (isActive ? 'active' : '')}><li><ReportIcon sx={{height:"70%",width:'auto'}}/><span>Complaints</span></li></NavLink>

        <NavLink to={"/profile"} className={({ isActive }) => (isActive ? 'active' : '')}><li><PersonIcon sx={{height:"70%",width:'auto'}}/><span>Profile</span></li></NavLink>

        <NavLink to={"/settings"} className={({ isActive }) => (isActive ? 'active' : '')}><li><SettingsIcon sx={{height:"70%",width:'auto'}}/><span>Settings</span></li></NavLink>

        <NavLink to={"/about"} className={({ isActive }) => (isActive ? 'active' : '')}><li><HelpIcon sx={{height:"70%",width:'auto'}}/><span>About</span></li></NavLink>
      </ul>

      <div className="logout">
        <LogoutIcon /><span>Logouts</span>
      </div>
    </div>
  );
};

export default Navbar;
