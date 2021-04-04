import React, { Component } from "react";
import FeedHeader from "./FeedHeader/FeedHeader";
import FeedImgBox from "./FeedImgBox/FeedImgBox";
import FeedIconBox from "./FeedIconBox/FeedIconBox";
import FeedFooterBox from "./FeedFooterBox/FeedFooterBox";
import "./FeedBox.scss";

class FeedBox extends Component {
  render() {
    return (
      <article className="FeedBox">
          <FeedHeader />
          <FeedImgBox />
          <FeedIconBox />
          <FeedFooterBox />
      </article>
    );
  }
}

export default FeedBox;
