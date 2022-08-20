import React, { Component } from 'react';
import Primate from '../primate/Primate';
import { v4 as uuidv4 } from 'uuid';
import './PrimateList.css';

class PrimateList extends Component {

    generatePrimateList(){

        let currentPrimateData = this.props.primateData;

        let primateListElements = currentPrimateData.map((primate, idx) => (
            <div className='col-4 text-center' key={uuidv4()}>
                <Primate primate={primate} idx={idx} />
            </div> 
        ));

        return primateListElements;
    }

  render() {

    let primates = this.generatePrimateList();

    return (
      <div className='PrimateList'>
        <div className='container'>
            <div className='row PrimateList-rowHeight'>
                {primates}
            </div>
        </div>
      </div>
    )
  }
}

export default PrimateList;