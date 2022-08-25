import React from 'react';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import '../assets/css/Profile.css'

function Profile () {
  return (
    <div>
      <Logo />
      <h2 className='title'>Login to your account</h2>
      <div>
          <div className='login'>
            <label for='username'>Username</label>
            <input id='username' name='username'/>
          </div>
          <div className='login'>
            <label for='password'>Password</label>
            <input type='password' id='password' name='password'/>
          </div>
          <div className='login-option'>
            <div className='login-remember'>
              <label for='remember'>&nbsp; | Remember Me</label>
              <input id='remember' type='checkbox'/>
            </div>
            <a className='recovery' href='/'>Forgot Password?</a>
          </div>
          <button className='btn--login'>Log In</button>
      </div>
      <Nav />
    </div>
  );
}

export default Profile;