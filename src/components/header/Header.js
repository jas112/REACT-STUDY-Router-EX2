import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <button className='Header-Btn' onClick={this.props.history.goBack}>&#10094;</button>
        <NavLink exact className='Header-link' activeClassName='Header-linkActive' to='/'>Home</NavLink>
        <NavLink exact className='Header-link' activeClassName='Header-linkActive' to='/wishingStone'>Wishing Stone</NavLink>
        <button className='Header-Btn' onClick={this.props.history.goForward}>&#10095;</button>
      </div>
    )
  }
}

export default withRouter(Header);