import React, { Component } from 'react';
import '../styles/MainHeader.css'
import gambar1 from '../images/pakettravel1.jpg'
import gambar2 from '../images/pakettravel2.jpg'
import gambar3 from '../images/pakettravel5.jpg'
import gambar4 from '../images/pakettravel4.jpg'
import gambar5 from '../images/pakettravel6.jpg'
import gambar6 from '../images/pakettravel8.jpg'


export default class MainHeader extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
            <div className="row">
                <div id="data" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                        <img className="d-block w-100" src={gambar6} alt="First slide" />
                        </div>
                        <div className="item">
                        <img className="d-block w-100" src={gambar2} alt="Second slide" />
                        </div>
                        <div className="item">
                        <img className="d-block w-100" src={gambar3} alt="Third slide" />
                        </div>
                        <div className="item">
                        <img className="d-block w-100" src={gambar4} alt="Third slide" />
                        </div>
                        <div className="item">
                        <img className="d-block w-100" src={gambar1} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#data" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#data" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    <ol className="carousel-indicators">
                        <li data-target="#data" data-slide-to="0" className="active"></li>
                        <li data-target="#data" data-slide-to="1"></li>
                        <li data-target="#data" data-slide-to="2"></li>
                        <li data-target="#data" data-slide-to="3"></li>
                        <li data-target="#data" data-slide-to="4"></li>
                    </ol>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
