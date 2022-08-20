import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './PrimateHeader.css';

class PrimateHeader extends Component {
  render() {
    return (
      <div className='PrimateHeader'>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                {/* <a class="navbar-brand" href="#">Primate Support</a> */}
                <NavLink exact className='PrimateHeader-link navbar-brand' activeClassName='PrimateHeader-linkActive' to='/'>Primate Support</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavLink exact className='PrimateHeader-link' activeClassName='PrimateHeader-linkActive' to='/'>Main</NavLink>
                    <NavLink exact className='PrimateHeader-link' activeClassName='PrimateHeader-linkActive' to='/primate/bumi'>Primate</NavLink>
                    <button className='PrimateHeader-Btn' onClick={this.props.history.goBack}>&#10094;Back</button>
                    <button className='PrimateHeader-Btn' onClick={this.props.history.goForward}>Forward&#10095;</button>
                </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(PrimateHeader);