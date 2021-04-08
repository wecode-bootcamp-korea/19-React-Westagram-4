import React, { Component } from "react";
import "./FeedImgBox.scss";

class FeedImgBox extends Component {
  render() {
    const { feedImg } = this.props;
    return (
      <div className="feedImgBox">
        <img src={feedImg} alt="" />
      </div>
    );
  }
}

export default FeedImgBox;
