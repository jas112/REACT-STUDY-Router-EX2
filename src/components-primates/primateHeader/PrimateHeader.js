import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './PrimateHeader.css';

class PrimateHeader extends Component {
    generatePrimateLinks(){
        let currentPrimateData = this.props.primateData;

        let primateLinks = currentPrimateData.map((primate, idx) => (
            <NavLink exact className='PrimateHeader-link' activeClassName='PrimateHeader-linkActive' to={`/primateDetails/${primate.name}/${idx}`} key={uuidv4()}>{primate.name}</NavLink>
        ));

        return primateLinks;
    }
  render() {

    let primateNavLinks = this.generatePrimateLinks();

    return (
      <div className='PrimateHeader'>
        <nav className="navbar navbar-expand-lg PrimateHeader-navBG">
            <div className="container-fluid">
                {/* <a class="navbar-brand" href="#">Primate Support</a> */}
                <NavLink exact className='PrimateHeader-link navbar-brand' activeClassName='PrimateHeader-linkActive' to='/'>Primate Support</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {primateNavLinks}
                </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(PrimateHeader);