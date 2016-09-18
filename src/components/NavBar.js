import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  render () {
    return(
      <div>
        <ul className="nav nav-pills">
          <li role="presentation">
            <Link to="/" activeStyle={{backgroundColor:'#FF4081',color:'#fff'}} onlyActiveOnIndex={true}>Home</Link>
          </li>
          <li role="presentation">
            <Link to="/work"  activeStyle={{backgroundColor:'#FF4081',color:'#fff'}}>Work</Link>
          </li>
          <li role="presentation">
            <Link to="/about"  activeStyle={{backgroundColor:'#FF4081',color:'#fff'}}>About</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
