import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <NavLink exact className='Header-link' activeClassName='Header-linkActive' to='/'>Home</NavLink>
        <NavLink exact className='Header-link' activeClassName='Header-linkActive' to='/wishingStone'>Wishing Stone</NavLink>
      </div>
    )
  }
}

export default Header;