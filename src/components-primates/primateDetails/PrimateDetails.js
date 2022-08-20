import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <li className='list-group-item PrimateDetails-primateFact' key={uuidv4()}>
                {fact}
            </li>
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
      <div className='container PrimateDetails'>
        <div className='row PrimateDetails-row'>
            <div className='col-11 col-lg-5 PrimateDetails-col'>
                <div className='card PrimateDetails-card'>
                    <img className='card-img-top PrimateDetails-img' src={imageSRC} alt={imageAltOrTitle} title={imageAltOrTitle} />
                    <div className='card-body'>
                        <h2 className='card-title PrimateDetails-title'>{primateName}</h2>
                        <h4 className='card-subtitle text-muted PrimateDetails-subTitle'>{primate.age} years old</h4>
                    </div>
                    <ul className='list-group list-group-flush'>
                        {primateFactElements}
                    </ul>
                    <div className='card-body PrimateDetails-navConsole'>
                        <button className='btn btn-info PrimateHeader-Btn' onClick={this.props.history.goBack}>&#10094;</button>
                        <Link className='btn btn-info PrimateHeader-Btn' to='/'>BACK TO INDEX</Link>
                        <button className='btn btn-info PrimateHeader-Btn' onClick={this.props.history.goForward}>&#10095;</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default PrimateDetails;