import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Todos from "./todos";
import Kamp from "./kamp";

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/todos" component={Todos} />
        <Route path="/kamp" component={Kamp} />
      </Switch>
    </div>
  );
}

export default Main;
