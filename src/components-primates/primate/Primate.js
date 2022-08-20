import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Primate.css';

class Primate extends Component {

    handleClick(evt){
        this.props.history.push(`/primateDetails/${this.props.primate.name}/${this.props.idx}`);
    }

  render() {

    let imageURL = `../../assets/${this.props.primate.image_file}`;
    let imageAltOrTitle = `Photo by ${this.props.primate.image_src}`;
    let primateMarkee = this.props.primate.name;

    return (
      <div className='Primate' onClick={this.handleClick}>
        <div className='Primate-display'>
            <img src={imageURL} alt={imageAltOrTitle} title={imageAltOrTitle} />
        </div>
        <div className='Primate-markee'>
            {primateMarkee}
        </div>
      </div>
    )
  }
}

export default withRouter(Primate);