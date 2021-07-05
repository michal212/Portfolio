import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import Portfolio from "../Pages/Portfolio";
import Skills from "../Pages/Skills";
import Form from "../Pages/ContectUs";

export default function Routing() {
  return (
    <div className="routing">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Skills" component={Skills}></Route>
        <Route path="/Portfolio" component={Portfolio}></Route>
        <Route path="/ContectUs" component={Form}></Route>
      </Switch>
    </div>
  );
}
