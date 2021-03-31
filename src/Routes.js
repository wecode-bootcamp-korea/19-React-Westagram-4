import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./Pages/danbipark/Main/Main";
import Login from "./Pages/danbipark/Login/Login";
import Main from "./Pages/juyoungson/Main/Main";
import Login from "./Pages/juyoungson/Login/Login";
import Main from "./Pages/saemijung/Main/Main";
import Login from "./Pages/saemijung/Login/Login";
import Main from "./Pages/jinahhong/Main/Main";
import Login from "./Pages/jinahhong/Login/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-juyoung" component={Login} />
          <Route exact path="/main-juyoung" component={Main} />
          <Route exact path="/login-danbipark" component={Login} />
          <Route exact path="/main-danbipark" component={Main} />
          <Route exact path="/login-saemijung" component={Login} />
          <Route exact path="/main-saemijung" component={Main} />
          <Route exact path="/login-jinahhong" component={Login} />
          <Route exact path="/main-jinahhong" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
