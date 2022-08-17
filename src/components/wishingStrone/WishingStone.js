import React, { Component } from 'react';
import Wish from '../wish/Wish';
import WishForm from '../wishForm/WishForm';
import './WishingStone.css';

export class WishingStone extends Component {
  render() {
    return (
      <div>
        <h1>What do you desire?...</h1>
        <WishForm />
        <Wish />
      </div>
    )
  }
}

export default WishingStone