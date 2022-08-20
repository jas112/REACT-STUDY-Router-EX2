import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import bumi from '../../images/bumi-simon-infanger.jpg';
import coocoo from '../../images/coocoo-dmitriy-zub.jpg';
import crumley from '../../images/crumley-chris-curry.jpg';
import genda from '../../images/genda-rob-schreckhise.jpg';
import gobo from '../../images/gobo-curt-chappman.jpg';
import peanut from '../../images/peanut-jeremy-bezanger.jpg';
import tengu from '../../images/tengu-carlos-cram.jpg';
import './Primate.css';

class Primate extends Component {
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

    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(evt){
        console.log('primate was clicked...');
        this.props.history.push(`/primateDetails/${this.props.primate.name}/${this.props.idx}`);
    }

  render() {

    let imageSRC = this.props.imageFiles[this.props.primate.image_file];
    console.log(`${this.props.primate.image_file}`);
    let imageAltOrTitle = `Photo by ${this.props.primate.image_src} on unsplash.com`;
    let primateMarkee = this.props.primate.name;
    let primateIdx = this.props.idx;

    return (
      <div className='Primate' onClick={this.handleClick}>
        <Link className='Primate-link' to={`/primateDetails/${primateMarkee}/${primateIdx}`}>
        <div className='Primate-display'>
            <div className='Primate-displayFrame'>
                <img className='Primate-img' src={imageSRC} alt={imageAltOrTitle} title={imageAltOrTitle} />
            </div>
        </div>
        <div className='Primate-markee'>
            {primateMarkee}
        </div>
        </Link>
      </div>
    )
  }
}

export default withRouter(Primate);