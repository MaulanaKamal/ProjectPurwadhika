import React, { Component } from 'react';
import '../styles/FooterSocialMedia.css'


export default class FooterSocialMedia extends Component {
  render() {
    return (
      <div>
            <div className="social_icon_area clearfix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ul>
                        <li className="logososmedfooter"><a href=""><i className="fa fa-facebook" aria-hidden="true"></i><span>facebook</span></a></li>
                        <li className="logososmedfooter"><a href=""><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a></li>
                        <li className="logososmedfooter"><a href=""><i className="fa fa-google-plus" aria-hidden="true"></i><span>GOOGLE+</span></a></li>
                        <li className="logososmedfooter"><a href=""><i className="fa fa-linkedin-square" aria-hidden="true"></i><span>linkedin</span></a></li>
                        <li className="logososmedfooter"><a href=""><i className="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a></li>
                        <li className="logososmedfooter"><a href=""><i className="fa fa-vimeo" aria-hidden="true"></i><span>VIMEO</span></a></li>
                        <li className="logososmedfooter"><a href=""><i className="fa fa-youtube-play" aria-hidden="true"></i><span>YOUTUBE</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
      </div>
    );
  }
}
