import React, { Component } from 'react';
// import Wish from '../wish/Wish';
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
            // <Wish wish={this.state.wish} />
            <h1>GrantedWish</h1>
        );
    }
  render() {

    // let grantedWish = this.manifestWish();

    return (
      <div className='WishingStone'>
        <h1 className='WishingStone-msg'>What do you desire?...</h1>
        <WishForm grantWish={this.grantWish} />
        <div>
            {/* {grantedWish} */}
        </div>
      </div>
    )
  }
}

export default WishingStone