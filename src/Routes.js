import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Main from "./Pages/danbipark/Main/Main";
// import Login from "./Pages/danbipark/Login/Login";
import MainS from "./Pages/juyoungson/Main/MainS";
import LoginS from "./Pages/juyoungson/Login/LoginS";
// import Main from "./Pages/saemijung/Main/Main";
// import Login from "./Pages/saemijung/Login/Login";
// import Main from "./Pages/jinahhong/Main/Main";
// import Login from "./Pages/jinahhong/Login/Login";
import './Styles/Default.scss';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginS} />
          <Route exact path="/login-juyoung/main-juyoung" component={MainS} />
          {/* <Route exact path="/login-danbipark" component={Login} />
          <Route exact path="/main-danbipark" component={Main} />
          <Route exact path="/login-saemijung" component={Login} />
          <Route exact path="/main-saemijung" component={Main} />
          <Route exact path="/login-jinahhong" component={Login} />
          <Route exact path="/main-jinahhong" component={Main} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
