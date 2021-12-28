import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default class Contact extends Component {
  render() {
    return (
      <div className="content">
        <h3>
          Chcesz do nas dołączyc lub masz kilka pytań? Pisz śmiało i sprawdź
          nasze profile na Facebooku i Instagramie!
        </h3>
        <div className="contentTextv2">
          <p>
            <a href="http://facebook.com" className="socialmedia">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
          </p>
          <p className="socialEmail">
            <b>Nasz adres email:</b>
            <br></br>
            <br></br> kontakt@coffee.zxy
          </p>

          <p>
            <a href="http://instagram.com" className="socialmedia">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
          </p>
        </div>
      </div>
    );
  }
}
