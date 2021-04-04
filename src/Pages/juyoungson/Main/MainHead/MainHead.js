import React, { Component } from "react";
import HeadImgList from "./HeadImgList/HeadImgList";
import "./MainHead.scss"

class MainHead extends Component {
  render() {
    return (
      <nav className="MainHead">
        <ul className="headBox">
          <HeadImgList/>
        </ul>
      </nav>
    );
  }
}

export default MainHead;
