import React, { Component } from 'react';
import '../styles/Header.css'
import { Link, Route } from 'react-router-dom'
import MainHeader from './MainHeader'
import IndonesiaProduct from './IndonesiaProduct'
import WhoWeAre from './WhoWeAre'


export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div id="navigasi">
                    <ul>
                        <li><Link className="nav" to = '/MainHeader'>Home</Link></li>
                        <li><Link className="nav" to = '/WhoWeAre'>Who we are</Link></li>
                        <li><Link className="nav" to = '/IndonesiaProduct' onClick={() => this.props.changeKeyword('indonesia')}>Indonesia Highlights</Link></li>
                        <li><Link className="nav" to = '/IndonesiaProduct' onClick={() => this.props.changeKeyword('luarnegeri')}>World Highlights</Link></li>
                        
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
