import React, { Component } from 'react';
import '../styles/Sukses.css'


export default class Sukses extends Component {
    
  render() {
    const showList = this.props.data1.data.map((x, i) => 
    <ul>
        <li>{x.nama}</li>
        <li>{x.ktp}</li>
        <li>{x.phone}</li>
        <li>{x.date}</li>
    </ul>
    );
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Succses</h1>
                <ul>
                    {showList}
                </ul>
                <p>Anda telah berhasil gabung dengan paket wisata kami, persiapkan diri anda dan pakaian ganti anda dan rasakan sensasi selama perjalanan nanti</p>
            </div>
        </div>
    );
  }
}
