import { useState } from "react";
export default function HomeCard(props) {
  const { imgSrc } = props;
  const { cardText } = props;
  const { cardSign } = props;
  const [cardTextOpacity, setCardTextOpacity] = useState("1");
  function unShowCardText() {
    setCardTextOpacity("0");
  }
  function showCardText() {
    setCardTextOpacity("1");
  }
  return (
    <div class="HomeCard">
      <div className="imgCardDiv">
        <div
          className="coveringCard"
          onMouseOver={unShowCardText}
          onMouseOut={showCardText}
          style={{
            opacity: cardTextOpacity,
          }}
        >
          <img id="firstImgCoveringCard" src={cardSign}></img>
          <p
            style={{
              fontFamily: "Fredericka the Great, cursive",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#11999e",
            }}
          >
            {cardText}
          </p>
        </div>
        <img
        id="secondImgCoveringCard"
          src={imgSrc}
          class="card-img-top"
          alt="Card image cap"
          style={{
            width: "100%",
            marginLeft: "0",
            borderRadius: "5%",
            height: "100%",
            border: "none",
          }}
        />
      </div>
    </div>
  );
}
