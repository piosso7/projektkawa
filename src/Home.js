import React, { Component } from "react";
import homeImg from "../src/images/homeImg.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="content">
        <div className="contentText mobileColumn">
          <p>
            <b>Witaj ma stronie grupy Coffee!</b> <br></br>
            <br></br>
            Stworzyliśmy tę stronę aby łączyć ludzi, którzy tak jak my są fanami
            kawy. Na stronie znajdziesz kilka rodzajów mniej lub bardziej
            zananych kaw, prosty przepis na pyszną domową kawę, ale co
            najważniejsze kontakt. Pozwolici Ci on dołączyć do naszej grupy, w
            której dzielimy się swoim doświadczeniem oraz pomysłami w tworzeniu
            kawy.
          </p>
          <img src={homeImg} alt="barista" />
        </div>
      </div>
    );
  }
}
