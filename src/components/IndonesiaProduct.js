import React, { Component } from 'react';
import '../styles/IndonesiaProduct.css'
import OwlCarousel from 'react-owl-carousel2';
import katalog from '../Katalog.json'
import { Link, Route } from 'react-router-dom'
import ReadMore from './ReadMore'
import Product from './Product'



export default class IndonesiaProduct extends Component {
    constructor() {
        super();
        this.state = {search : ''}
    }

    mencari = search => {
        this.setState({search});
    }    
  render() {
    let carikategori = keyword => katalog.filter(x => x.kategori == keyword)
    let list = carikategori(this.props.keyword)

    return (
      <div className="container">
        <div className="indonesiahighlights">
            <a href="" className="indonesiahighlightshover">Indonesia Higlights</a>
        </div>
        <div>
            <div className="ui search">
            <div className="ui icon input search">
                <input className="prompt" type="text" placeholder="where do u go ?" ref="search" onChange = {() => {this.mencari(this.refs.search.value);}} />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
            </div>
        </div>
        {/* <div>{this.setState.newSearch}</div> */}

            {/* product */}
            <section className="welcome-post-sliders konten">
            {list.filter(x => (new RegExp(this.state.search, 'gi')).test(x.nama)).map(x => <Product {...x}/>)}
            </section>   
      </div>
    );
  }
}

