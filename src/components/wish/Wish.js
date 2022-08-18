import React, { Component } from 'react';
// import React from 'react';
// import {useNavigate, useParams} from 'react-router-dom';
import './Wish.css';

class Wish extends Component {
  render() {

    let targetUrl = `https://source.unsplash.com/1600x900/?${this.props.wish}}`;

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

// function Wish() {

//   let navigate = useNavigate();
//   let {wish} = useParams(); 

//   let targetUrl = `https://source.unsplash.com/1600x900/?${wish}`;

//   return (
//     <div>
//       <h1>The object of your desire... {wish}</h1>
//       <div>
//         <img src={targetUrl} alt={wish} />
//       </div>
//     </div>
//   )
// }

// export default Wish;



