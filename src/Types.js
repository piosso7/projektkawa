import React, { Component } from "react";
import Espresso from "./images/Espresso.jpg";
import Ristretto from "./images/Ristretto.jpg";
import Cappuccino from "./images/Cappuccino.jpg";
import Caffemacchiato from "./images/Caffemacchiato.jpg";
import Mokka from "./images/Mokka.jpg";
import Romano from "./images/Romano.jpg";
import Freddo from "./images/Freddo.jpg";
export default class Types extends Component {
  render() {
    return (
      <div className="content">
        <h3>
          Poniżej znajdziesz kilka typów kaw, które możesz kupić w kawiarni lub
          przygotować w domu.
        </h3>
        <div className="contentTextv2">
          <p>
            <b>Espresso</b>
            <br></br>
            <br></br> Nazwa sposobu przygotowywania kawy w specjalnym ekspresie,
            przez przepuszczenie 25-35 ml gorącej (90,5-96 °C) wody pod
            ciśnieniem 8,5-9,5 bara przez bardzo drobno zmielone i ubite ziarna
            kawowca.
          </p>
          <img src={Espresso} alt="Espresso" />
        </div>
        <div className="contentText">
          <p>
            <b>Ristretto</b>
            <br></br>
            <br></br> Nazwa sposobu przygotowywania kawy w specjalnym ekspresie.
            Kawę przygotowuje się podobnie jak espresso, ale przy użyciu
            dwukrotnie mniejszej ilości wody (15ml).
          </p>
          <img src={Ristretto} alt="Ristretto" />
        </div>
        <div className="contentTextv2">
          <p>
            <b>Cappuccino</b>
            <br></br>
            <br></br> Włoski napój kawowy z dodatkiem spienionego mleka
            (rzadziej z bitą śmietaną) i szczyptą sypkiej czekolady lub kakao
            dla ozdoby. Podawane często do smaku z gałką lodów w śmietance, ma
            orzechowy kolor.
          </p>
          <img src={Cappuccino} alt="Cappuccino" />
        </div>
        <div className="contentText">
          <p>
            <b>Caffè macchiato</b>
            <br></br>
            <br></br> Rodzaj kawy; espresso z dolaną niewielką ilością mleka.
            "Macchiato" z języka włoskiego oznacza "splamiony",
          </p>
          <img src={Caffemacchiato} alt="Caffemacchiato" />
        </div>
        <div className="contentTextv2">
          <p>
            <b>Mokka</b>
            <br></br>
            <br></br> Jeden z wariantów kawy latte. Składa się z espresso,
            gorącego mleka oraz ciemnej lub mlecznej czekolady. W odróżnieniu od
            latte czy cappuccino, kawa mokka nie zawiera piany. W zamian dodaje
            się bitą śmietanę i posypuje ją cynamonem lub kakao.
          </p>
          <img src={Mokka} alt="Mokka" />
        </div>
        <div className="contentText">
          <p>
            <b>Romano</b>
            <br></br>
            <br></br> Kawa wzbogacona o aromat skórki cytrynowej. Kawa Romano to
            nic innego jak kawa espresso, do której dodajemy kawałek skórki
            cytrynowej lub dolewamy kilka kropel soku cytrynowego.
          </p>
          <img src={Romano} alt="Romano" />
        </div>
        <div className="contentTextv2">
          <p>
            <b>Freddo</b>
            <br></br>
            <br></br> Z włoskiego freddo oznacza zimny. Dlatego kawa freddo to
            nic innego jak espresso na zimno. Kawę tę możemy przygotować na
            kilka sposobów. Najprostsza opcja to podanie wystudzonej kawy.
            Alternatywą jest dodanie kostek lodu do gorącego espresso. Możemy
            spotkać także kawę freddo z alkoholem (w włoskiej wersji będzie to
            najczęściej grappa lub brandy).
          </p>
          <img src={Freddo} alt="Freddo" />
        </div>
      </div>
    );
  }
}
