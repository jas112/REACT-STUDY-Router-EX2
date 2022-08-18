import React, { Component } from 'react';
import Wish from '../wish/Wish';
import WishForm from '../wishForm/WishForm';
import './WishingStone.css';

export class WishingStone extends Component {
    constructor(props){
        super(props);
        this.state = {wish: ''};
        this.grantWish = this.grantWish.bind(this);
    }

    grantWish(newWish){
        this.setState({wish: newWish});
    }

    manifestWish(){
        return (
            <Wish wish={this.state.wish} />
        );
    }
  render() {

    let grantedWish = this.manifestWish();

    return (
      <div>
        <h1>What do you desire?...</h1>
        <WishForm grantWish={this.grantWish} />
        <div>
            {grantedWish}
        </div>
      </div>
    )
  }
}

export default WishingStone