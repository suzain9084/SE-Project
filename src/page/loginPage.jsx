import React, { useState } from 'react';
import '../css/loginPage.css';

export default function AuthPanel() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className='boby'>
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form action="#" className='form'>
          <h1 className='h1'>Create Account</h1>
          <span className='span'>or use your email for registration</span>
          <input type="text" className='input' placeholder="Name" />
          <input type="email" className='input' placeholder="Email" />
          <input type="password" className='input' placeholder="Password" />
          <button className='button'>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form action="#" className='form'>
          <h1 className='h1'>Sign in</h1>
          <span className='span'>or use your account</span>
          <input type="email" className='input' placeholder="Email" />
          <input type="password" className='input' placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button className='button'>Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className='h1'>Welcome Back!</h1>
            <p className='p'>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className='h1'>Hello, Friend!</h1>
            <p className='p'>Enter your personal details and start your journey with us</p>
            <button className="ghost button" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
