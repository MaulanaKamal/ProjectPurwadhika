import React, { Component } from 'react';
// import '../styles/IndonesiaProduct.css'
import OwlCarousel from 'react-owl-carousel2';
// import katalog from '../Katalog.json'
import { Link, Route } from 'react-router-dom'




export default class Product extends Component {   
  render() {
    return (
        <div key={this.props.id} className="col-md-3">
            <div className="owl-item">
                <div className="welcome-single-slide">
                    <img className="img-responsive img-rounded" src={this.props.imageproduct} alt="" />
                    <div className="project_title">
                        <div className="post-date-commnents d-flex">      
                            <Link onClick = {() => window.scrollTo(0,0)} className="ui label" to = {`/ReadMore/${this.props.id}`}>
                                {this.props.harga} | Order Now
                            </Link>                    
                            <br/>
                            <a href="">{this.props.nama}</a>
                        </div>
                        <p>{this.props.deskripsi}</p>
                    </div>
                </div>
            </div> 
        </div>
    );
  }
}
