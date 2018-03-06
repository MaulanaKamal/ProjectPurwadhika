import React, { Component } from 'react';
import '../styles/WhoWeAre.css'
import gambaricon from '../images/avataricon.png'


export default class WhoWeAre extends Component {
  render() {
    return (
        <div>
            <div className="container">
            <div className="whoweare">
                <a href="" className="whowearehover">Who We Are</a>
            </div>
                <div className="col-md-4">
                <div className="ui card">
                    <div className="image">
                        <img src={gambaricon} />
                    </div>
                    <div className="content">
                        <a className="header">Maulana Kamal</a>
                        <div className="meta">
                            <span className="date">Founder holiday.com</span>
                        </div>
                        <div className="description">
                        Eat Sleep & Code
                        </div>
                    </div>
                    <div className="extra content">
                        <div id="media">
                            <ul>
                                <li className="logososmed"><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
                                <li className="logososmed"><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
                                <li className="logososmed"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                <li className="logososmed"><i className="fa fa-github" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-8">
                    <div className="ui piled segment">
                        <h4 className="ui header">About Holiday.com</h4>
                        <p>Holiday.com is the first and largest online Tour Package in Indonesia that allows individual or group traveler to be free to travel easily, complete facilities and comfortable, we provide experience ease in finding complete tour packages all over Indonesia without complicated, for example looking for plane tickets , hotels, vehicles, and regional specialties are all one, just bring your clothes along the way and enjoy the convenience of traveling around Indonesia.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, laboriosam quam. Dolor natus soluta optio magni magnam ullam? Voluptatum dolor harum consequatur et. Eos dicta natus reprehenderit minima ipsa qui quidem magni, quos a magnam porro totam corrupti autem fugiat enim. Libero voluptas error eveniet aut facilis corrupti repudiandae sint?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum id unde quis aperiam, consequatur voluptatibus praesentium est? Cum corrupti perspiciatis et omnis aliquam necessitatibus reiciendis, ex assumenda similique vel ut laudantium libero dolores asperiores est possimus distinctio quam at qui culpa fugiat dicta recusandae nostrum! Odio pariatur ipsum ullam!</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
  }
}
