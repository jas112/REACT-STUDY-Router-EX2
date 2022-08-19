import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './WishForm.css';

class WishForm extends Component {
    constructor(props){
        super(props);
        this.state = {wish: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        if(this.state.wish === ''){
            alert('Please enter your wish...');
        }else{
            let newWish = {wish: this.state.wish}
            this.props.grantWish(newWish);
            this.setState({wish: ''});
        }
    }

  render() {
    return (
      <div>
        <h1>Wishing for... {this.state.wish}</h1>
        <form onSubmit={this.handleSubmit}>
            <input type='text' id='wish' name='wish' value={this.state.wish} onChange={this.handleChange} className='WishForm-wishInput' placeholder='Enter your desire here...' />
            {/* <button type='submit' className='WishForm-button' >GRANT MY WISH!!!</button> */}
            <Link className='WishForm-link' to={`/wish/${this.state.wish}`}>CLICK TO GRANT WISH</Link>
        </form>
      </div>
    )
  }
}

export default WishForm;