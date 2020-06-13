import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Nav = props => {
  const handleClick = e => {
    props.setTotal([])
  }

  return (
    <div className='nav-container'>
      <h1>Lambda Eats</h1>
      <nav>
        <Link className='link' to='/' onClick={handleClick} >Home</Link>
      </nav>
    </div>
  )
}

export default Nav;