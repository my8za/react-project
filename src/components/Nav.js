import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdSearch, MdFavorite, MdAccountCircle } from "react-icons/md";


function Nav () {


  return (
    <ul className='nav-container'>
      <li className='nav-item'>
        <Link to ='/' className='nav-link'> <MdHome className='btn-icon'/>  HOME </Link>
      </li>
      <li className='nav-item'>
        <Link to ='/search' className='nav-link'><MdSearch className='btn-icon'/> Search </Link>
      </li>
      <li className='nav-item'>
        <Link to ='/like' className='nav-link'> <MdFavorite className='btn-icon'/> Favorite </Link>
      </li>
      <li className='nav-item'>
        <Link to ='/profile' className='nav-link'> <MdAccountCircle className='btn-icon'/> Profile </Link>
      </li>
    </ul>
  );
}

export default Nav;