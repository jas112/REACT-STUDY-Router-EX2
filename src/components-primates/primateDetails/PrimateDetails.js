import React, { Component } from 'react';
import primateData from '../../data_resources/PrimateData';
import { v4 as uuidv4 } from 'uuid';
import bumi from '../../images/bumi-simon-infanger.jpg';
import coocoo from '../../images/coocoo-dmitriy-zub.jpg';
import crumley from '../../images/crumley-chris-curry.jpg';
import genda from '../../images/genda-rob-schreckhise.jpg';
import gobo from '../../images/gobo-curt-chappman.jpg';
import peanut from '../../images/peanut-jeremy-bezanger.jpg';
import tengu from '../../images/tengu-carlos-cram.jpg';
import './PrimateDetails.css';

class PrimateDetails extends Component {
    static defaultProps = {
        imageFiles: {
            'bumi': bumi,
            'coocoo': coocoo,
            'crumley': crumley,
            'genda': genda,
            'gobo': gobo,
            'peanut': peanut,
            'tengu': tengu
        }
    }
    generatePrimateFacts(pFacts){
        let factElements = pFacts.map(fact => (
            <div className='PrimateDetails-primateFact' key={uuidv4()}>
                {fact}
            </div>
        ));
        return factElements;
    }
  render() {

    let idx = this.props.match.params.idx;
    let primate = primateData.primates[idx];
    let imageSRC = this.props.imageFiles[primate.image_file];
    let imageAltOrTitle = `Photo by ${primate.image_src}`;
    let primateName = primate.name;
    let primateFacts = primate.facts;
    let primateFactElements = this.generatePrimateFacts(primateFacts);

    return (
      <div>
        <div className='PrimateDetails-imgDisplay'>
            <img className='PrimateDetails-img' src={imageSRC} alt={imageAltOrTitle} title={imageAltOrTitle} />
        </div>
        <div className='PrimateDetails-primateName'>
            {primateName}
        </div>
        <div className='PrimateDetails-primateAge'>
            {primate.age}
        </div>
        <div className='PrimateDetails-primateFacts'>
            {primateFactElements}
        </div>
        <div className='PrimateDetails-navConsole'>
        <button className='PrimateHeader-Btn' onClick={this.props.history.goBack}>&#10094;</button>
        <button className='PrimateHeader-Btn' onClick={this.props.history.goForward}>&#10095;</button>
        </div>
      </div>
    )
  }
}

export default PrimateDetails;