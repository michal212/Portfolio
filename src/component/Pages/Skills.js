import "../../index.css";
import { useState } from "react";
export default function Skills() {
  const [firstCardBlur, setFirstCardBlur] = useState("");
  const [secondCardBlur, setSecondCardBlur] = useState("");
  const [thirdCardBlur, setThirdCardBlur] = useState("");

  const [cardSize, setCardSize] = useState();
  function mouseOverFirstCard() {
    setSecondCardBlur("blur(4px)");
    setThirdCardBlur("blur(4px)");
  }
  function MouseOutFirstCard() {
    setSecondCardBlur("blur(0px)");
    setThirdCardBlur("blur(0px)");
  }
  function mouseOverSecondCard() {
    setFirstCardBlur("blur(4px)");
    setThirdCardBlur("blur(4px)");
  }
  function MouseOutSecondCard() {
    setFirstCardBlur("blur(0px)");
    setThirdCardBlur("blur(0px)");
  }
  function mouseOverThirdCard() {
    setFirstCardBlur("blur(4px)");
    setSecondCardBlur("blur(4px)");
  }
  function MouseOutThirdCard() {
    setFirstCardBlur("blur(0px)");
    setSecondCardBlur("blur(0px)");
  }

  return (
    <div className="skillsCon">
      <h1 id="skillsHeader">Here some of my skills</h1>

      <div className="cardSkillsCon">
        <div
          className="card"
          onMouseOver={mouseOverFirstCard}
          onMouseOut={MouseOutFirstCard}
          style={{
            filter: firstCardBlur,
          }}
        >
          <img src="skills.png" className="card-img-top" alt="..." />
          <div class="card-body">
            <p>C#</p>
            <p>Asp.Net</p>
            <p>MVC</p>
            <p>node</p>
            <p>js OPP</p>
            <p>Ado.Net</p>
            <p>Api Using Express</p>
          </div>
        </div>

        <div
          class="card"
          onMouseOver={mouseOverSecondCard}
          onMouseOut={MouseOutSecondCard}
          style={{ filter: secondCardBlur }}
        >
          <img src="ui-design.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <p>HTML</p>
            <p>Css</p>
            <p>javaScript</p>
            <p>React</p>
            <p>BootStrap</p>
            <p>JQuery</p>
            <p>Nodejs</p>
          </div>
        </div>
        <div
          class="card"
          onMouseOver={mouseOverThirdCard}
          onMouseOut={MouseOutThirdCard}
          style={{ filter: thirdCardBlur }}
        >
          <img src="backend.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <p>playing basketball</p>
            <p>baking</p>
            <p>codeing</p>
            <p>home decoration</p>
            <p>party planner</p>
            <p>singing</p>
            <p>jhpk</p>
          </div>
        </div>
      </div>
    </div>
  );
}
