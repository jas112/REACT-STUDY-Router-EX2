import React, { Component } from 'react';
import Primate from '../primate/Primate';
import primateData from '../../data_resources/PrimateData';
import './PrimateList.css';

class PrimateList extends Component {

    generatePrimateList(){
        let currentPrimateData = primateData.primates;

        let primateListElements = currentPrimateData.map((primate, idx) => (
            <Primate primate={primate} idx={idx} />
        ));

        return primateListElements;
    }

  render() {

    let primates = this.generatePrimateList();

    return (
      <div className='PrimateList'>
        {primates}
      </div>
    )
  }
}

export default PrimateList;