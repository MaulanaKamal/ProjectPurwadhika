import React, { Component } from 'react';
import '../styles/ReadMore.css'
import gambar1 from '../images/pakettravel3.jpg'
import katalog from '../Katalog.json'
import { Link, Route } from 'react-router-dom'
import Sukses from './Sukses'


export default class ReadMore extends Component {
  handleAdd = (e) => {
    e.preventDefault()
    if(this.refs.nama.value && this.refs.id.value && this.refs.phone.value && this.refs.date.value ) {
        let user = { nama : this.refs.nama.value, ktp : this.refs.id.value, phone : this.refs.phone.value, date : this.refs.date.value }
        console.log(this.refs.nama)
        this.props.onAdd(user);
    } 
  }

  reset = (e) => {
    e.preventDefault();
    this.refs.nama.value = '';
    this.refs.id.value = '';
    this.refs.phone.value = '';
    this.refs.date.value = '';
  }
  render() {
    return (
        <div className="container readmore-container">
        <img className="ui centered extra-large image" src={`../${this.props.imagedetail}`} />
            <div className="readmore">
            <h2>{this.props.nama}</h2>
            <h2>Price : {this.props.harga}</h2>
            <hr/>
            <div id="WhattoExpect">
            <div>
                <h4 className="title" data-target="#panel-1"
                data-toggle="collapse"
                data-parent="#WhattoExpect"> <i className="angle right icon"></i> What to Expect
                </h4>
            </div>
                    <div className="collapse" id="panel-1">
                        <div className="panel-body">
                        <p>{this.props.deskripsidetail}</p>
                    </div>
                </div>
            </div>
            <hr/>
            
        </div> 
            <form className="form-horizontal data_form ">
              <div className="form-group readmore_form">
                <label htmlFor="nama" className="col-sm-2 control-label">Name</label>
                <div className="col-md-4">
                  <input type="text" className="form-control" id="nama" placeholder="Name" ref="nama" />
                </div>
              </div>
              <div className="form-group readmore_form">
                <label htmlFor="idnumber" className="col-sm-2 control-label">KTP/Paspor</label>
                <div className="col-md-4">
                  <input type="number" className="form-control" id="idnumber" placeholder="No. KTP/Paspor" ref="id" />
                </div>
              </div>
              <div className="form-group readmore_form">
                <label htmlFor="phone" className="col-sm-2 control-label">Phone</label>
                <div className="col-md-4">
                  <input type="number" className="form-control" id="phone" placeholder="Phone umber" ref="phone" />
                </div>
              </div>
              <div className="form-group readmore_form">
                <label htmlFor="date" className="col-sm-2 control-label">Tanggal Keberangkatan</label>
                <div className="col-md-4">
                  <input type="date" className="form-control" id="date" placeholder="" ref="date" />
                </div>
              </div>
              
              <div className="form-group readmore_form">
                <div className="col-md-offset-2 col-md-10">
                  <Link to = '/Sukses'> <button className="btn btn-default" onClick ={this.handleAdd}>Order Sekarang</button></Link>
                  <button className="btn btn-danger" onClick ={this.reset}>NO</button>
                </div>
              </div>
            </form>
    </div>
            
        
    );
  }
}
