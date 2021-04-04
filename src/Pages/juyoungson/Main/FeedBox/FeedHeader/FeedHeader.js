import React, { Component } from "react";
import "./FeedHeader.scss";
import juyoung from "../../../../../Images/juyoungson/juyoung.jpg";

class FeedHeader extends Component {
  render() {
    return (
      <header className="feedHeader">
        <div className="feedLeftBox">
          <img src={juyoung}></img>
          <a className="" href="">
            ilyewis_
          </a>
        </div>
        <div className="feedRightBox">
          <a href="">
            <div className="fa-lg">
              <i className="fas fa-ellipsis-h" data-fa-transform="shrink-8"></i>
            </div>
          </a>
        </div>
      </header>
    );
  }
}

export default FeedHeader;
