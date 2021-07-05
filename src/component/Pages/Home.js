import HomeCard from "../Features/HomeCard";
import { useContext } from "react";
import { ImgContext } from "../Features/Contex";
import Header from "../Features/Header";
import Summary from "../Features/Summary";
import "../../";

export default function Home() {
  const firstCardText = "how repaint works in react ";
  const secondCardText = "virtual dom in react";
  const thirdCardText = "demonstration of layouteffect";

  return (
    <div className="home">
      <div className="homeHeader">
        <img class="firstCloudImg" src="cloud.png"></img>
        <h1 id="mainHeader">I'm Michal </h1>
        <p id="secondHeader">A web Develpor</p>
        <img class="secondCloudImg" src="cloud.png"></img>
        <img id="mountainImg" src="mountain.png"></img>
      </div>
      <Summary />
      <h3 className="cardsHeader">
        Here you can see me at a class presentation talking about{" "}
      </h3>

      <div className="homeCards">
        <HomeCard
          imgSrc="./me.jpeg"
          cardSign="./like.png"
          cardText={firstCardText}
        ></HomeCard>
        <HomeCard
          imgSrc="./me1.jpeg"
          cardSign="./diamond.png"
          cardText={secondCardText}
        ></HomeCard>
        <HomeCard
          imgSrc="./me2.jpeg"
          cardSign="./shamrock.png"
          cardText={thirdCardText}
        ></HomeCard>
      </div>
    </div>
  );
}
