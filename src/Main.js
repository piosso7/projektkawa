import React, { Component } from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Preparation from "./Preparation";
import Types from "./Types";
import logo from "./images/logo.png";
import headerBgVideo from "./videos/headerBgVideo.mp4";

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="headerLogo">
            <img src={logo} alt="Logo" className="logoImg" />
            <div className="headerBgVideo">
              <video autoPlay loop muted className="headerBgVideoSrc">
                <source src={headerBgVideo}></source>
              </video>
            </div>
          </div>
          <ul className="header">
            <li>
              <NavLink to="/">Start</NavLink>
            </li>
            <li>
              <NavLink to="/types-of-coffee">Typy kawy</NavLink>
            </li>
            <li>
              <NavLink to="/preparation-of-coffee">
                Jak przygotować kawę
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontakt</NavLink>
            </li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/types-of-coffee" element={<Types />} />
              <Route path="/preparation-of-coffee" element={<Preparation />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
