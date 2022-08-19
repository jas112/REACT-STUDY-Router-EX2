import React, { Component } from 'react';
// import React from 'react';
// import {useNavigate, useParams} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './Wish.css';

class Wish extends Component {

  generateWish(wish, url){
    return(
      <div className='Wish-console'>
        <h1 className='Wish-msg'>The object of your desire... {wish}</h1>
        <div className='Wish-display'>
          <img className='Wish-img' src={url} alt={wish} />
        </div>
      </div>
    );
  }
  render() {

    let wish = this.props.match.params.wish
    let targetUrl = `https://source.unsplash.com/1600x900/?${wish}}`;

    let grantedWish = this.generateWish(wish, targetUrl);

    return (
      <div className='Wish'>
        {/\d/.test(wish) ? <Redirect to='/' /> : grantedWish}
        {/* <h1 className='Wish-msg'>The object of your desire... {wish}</h1>
        <div className='Wish-display'>
          <img className='Wish-img' src={targetUrl} alt={wish} />
        </div> */}
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



