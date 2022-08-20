import React, { Component } from 'react';
import PrimateList from '../primateList/PrimateList';
import './PrimateHome.css';

class PrimateHome extends Component {
  render() {
    return (
      <div>
        <PrimateList primateData={this.props.primateData} />
      </div>
    )
  }
}

export default PrimateHome;