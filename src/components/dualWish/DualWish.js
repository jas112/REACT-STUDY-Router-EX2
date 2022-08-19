import React, { Component } from 'react';
import './DualWish.css';

class DualWish extends Component {
    render() {

        let wish1 = this.props.match.params.wish1
        let targetUrl1 = `https://source.unsplash.com/1600x900/?${wish1}}`;
        let wish2 = this.props.match.params.wish2
        let targetUrl2 = `https://source.unsplash.com/1600x900/?${wish2}}`;

        return (
            <div className='DualWish'>
            <h1>The object of your desire... {wish1} & {wish2}</h1>
            <div className='DualWish-display'>
                <img className='DualWish-img' src={targetUrl1} alt={wish1} />
            </div>
            <div className='DualWish-display'>
                <img className='DualWish-img' src={targetUrl2} alt={wish2} />
            </div>
            </div>
        )
    }
}

export default DualWish