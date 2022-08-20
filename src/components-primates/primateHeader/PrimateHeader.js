import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './PrimateHeader.css';

class PrimateHeader extends Component {
  render() {
    return (
      <div className='PrimateHeader'>
        <button className='PrimateHeader-Btn' onClick={this.props.history.goBack}>&#10094;</button>
        <NavLink exact className='PrimateHeader-link' activeClassName='PrimateHeader-linkActive' to='/'>Home</NavLink>
        <NavLink exact className='PrimateHeader-link' activeClassName='PrimateHeader-linkActive' to='/primate'>Wishing Stone</NavLink>
        <button className='PrimateHeader-Btn' onClick={this.props.history.goForward}>&#10095;</button>
      </div>
    )
  }
}

export default withRouter(PrimateHeader);