import React from 'react';
import { Link } from 'react-router-dom';
import { RiMovie2Line } from "react-icons/ri";

function Logo () {
  return (
    <div>
      <h1 className='logo-container container'>
          <Link to='/' className='logo'>
            <RiMovie2Line />
            &nbsp; 4Movie
          </Link>
        </h1>
    </div>
  );
}

export default Logo;