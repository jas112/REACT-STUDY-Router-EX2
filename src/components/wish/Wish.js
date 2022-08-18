import React, { Component } from 'react';
import './Wish.css';

class Wish extends Component {
  render() {

    let targetUrl = `https://source.unsplash.com/1600x900/?${this.props.wish}`;

    return (
      <div>
        <h1>The object of your desire... {this.props.wish}</h1>
        <div>
          <img src={targetUrl} alt={this.props.wish} />
        </div>
      </div>
    )
  }
}

export default Wish;