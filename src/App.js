import Footer from "./component/Features/Footer";
import SideBar from "./component/Features/SideBar";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./component/Features/Routing";
import Header from "./component/Features/Header";

function App() {
  const [imgShow, setImgShow] = useState(0);

  const imgValue = {
    display: imgShow,
    imgSet: (value) => {
      setImgShow(value);
    },
  };
  return (
    <>
      <Router>
        <Header/>
        <div className="main">
          <SideBar />
          <Routing />
        </div>

        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
