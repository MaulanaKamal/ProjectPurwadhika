import React, { Component } from 'react';
import '../styles/Footer.css'
import gambarfooter1 from '../images/bestprice.png'
import gambarfooter3 from '../images/easytouse.png'
import gambarfooter2 from '../images/Jempol03.png'



export default class Footer extends Component {
  render() {
    return (
        <div className="container footer">
            <div className="col-xs-12 beritafooter">
                <h5>Holiday.com - Booking the Greatest Online Tour Package, Safe, Comfortable and Without Rug</h5>
                <p>
                Holiday.com is the first and largest online Tour Package in Indonesia that allows individual or group traveler to be free to travel easily, complete facilities and comfortable, we provide experience ease in finding complete tour packages all over Indonesia without complicated, for example looking for plane tickets , hotels, vehicles, and regional specialties are all one, just bring your clothes along the way and enjoy the convenience of traveling around Indonesia.</p>
                            </div>
            <div className="col-md-4">
            <div className="ui items foot">
                <div className="item">
                    <div className="image">
                    <img src={gambarfooter2} />
                    </div>
                    <div className="content">
                        <a className="header">safety & comfort</a>
                        <div className="description">
                            <p>Your safety & comfort is our priority, from leaving to arriving at your home is our responsibility.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="ui items foot">
                <div className="item">
                    <div className="image">
                    <img src={gambarfooter1} />
                    </div>
                    <div className="content">
                        <a className="header">Best Price</a>
                        <div className="description">
                            <p>Compare the reviews & prices of our tour packages all over Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="ui items foot">
                <div className="item">
                    <div className="image">
                    <img src={gambarfooter3} />
                    </div>
                    <div className="content">
                        <a className="header">Convenience</a>
                        <div className="description">
                            <p>We come with the convenience, you need a holiday, prepare your clothes, choose a holiday package, and order our tour packages</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
  }
}
