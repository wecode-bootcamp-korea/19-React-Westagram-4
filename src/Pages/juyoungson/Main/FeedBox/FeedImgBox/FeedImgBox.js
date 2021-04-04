import React, { Component } from "react";
import "./FeedImgBox.scss";
import feedCat from "../../../../../Images/juyoungson/cat.jpg";

class FeedImgBox extends Component {
  render() {
    return (
      <div className="feedImgBox">
        <img src={feedCat} alt="" />
      </div>
    );
  }
}

export default FeedImgBox;
