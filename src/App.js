import React, { Component } from 'react';
import './App.css';
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import MainHeader from './components/MainHeader'
import IndonesiaProduct from './components/IndonesiaProduct'
import WhoWeAre from './components/WhoWeAre'
import FooterSocialMedia from './components/FooterSosialMedia'
import Footer from './components/Footer'
import ReadMore from './components/ReadMore'
import Sukses from './components/Sukses'
import { Link, Route } from 'react-router-dom'
import katalog from './Katalog.json'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data : [],
      keyword: ''
    }
  }
  changeKeyword = keyword => this.setState({keyword})

  add = (user) => {
    this.setState({data : [...this.state.data, user] });
  }
  render() {
    return (
      <div>

        {/* HEADER-FIXED */}
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <TopHeader/> 
            <Header changeKeyword={this.changeKeyword.bind(this)}/>
          </div>
        </nav>

        {/* HOME WHOWEARE INDONESIAPRODUCT READMORE INPUTDATA JUMBOTRAINSUKSES */}
        <Route path = '/MainHeader' component = {MainHeader} />
        <Route path = '/WhoWeAre' component = {WhoWeAre} />
        <Route path = '/IndonesiaProduct' render = {() => <IndonesiaProduct keyword={this.state.keyword}/>} />
        <Route path = '/ReadMore/:id' render = {({match}) => <ReadMore {...katalog.find(x => x.id == match.params.id )} onAdd = {this.add.bind(this)}/>}/>
        <Route path = '/Sukses' render = {({Sukses}) => <Sukses data1 = {this.state}/> }/>
        
        
        {/* FOOTER */}
        <hr/>
        <FooterSocialMedia/>
        <hr/>
        <Footer/>

      </div>
    );
  }
}



