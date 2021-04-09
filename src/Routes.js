import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginP from "./Pages/danbipark/Login/LoginP";
import MainP from "./Pages/danbipark/Main/MainP";
import LoginS from "./Pages/juyoungson/Login/LoginS";
import MainS from "./Pages/juyoungson/Main/MainS";
import LoginJ from "./Pages/saemijung/Login/LoginJ";
import MainJ from "./Pages/saemijung/Main/MainJ";
import LoginH from "./Pages/jinahhong/Login/LoginH";
import MainH from "./Pages/jinahhong/Main/MainH";
import './Styles/Reset.scss';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/loginS" component={LoginS} />
          <Route exact path="/mainS" component={MainS} />
          <Route exact path="/loginP" component={LoginP} />
          <Route exact path="/mainP" component={MainP} />
          <Route exact path="/loginJ" component={LoginJ} />
          <Route exact path="/mainJ" component={MainJ} />
          <Route exact path="/LoginH" component={LoginH} />
          <Route exact path="/MainH" component={MainH} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
