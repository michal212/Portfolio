import React, { createContext, useContext } from "react";
import '../../index.css'
export default function Header() {
  return (
    <div className="header">
      <div className="HeaderEmail">
        <h2 className="headerEmail">michalfarada1997@gmail.com </h2>
      </div>
      <div className="HeaderTechLogo">
        <a href="https://www.facebook.com/tech.career">
          <img id="techLogo" src="techLogo.jpg"></img>
        </a>
      </div>
    </div>
  );
}
