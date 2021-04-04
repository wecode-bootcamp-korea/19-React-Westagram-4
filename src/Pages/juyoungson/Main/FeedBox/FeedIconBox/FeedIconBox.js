import React, { Component } from "react";
import "./FeedIconBox.scss";
import messageIcon from "../../../../../Images/juyoungson/message.png";

class FeedIconBox extends Component {
  render() {
    return (
      <section className="footerIconBox">
        <div className="footerLeft">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="좋아요"
          />
          <i className="far fa-comment fa-2x"></i>
          <img src={messageIcon} alt="" />
        </div>
        <div className="footerRight">
          <i className="far fa-bookmark fa-2x"></i>
        </div>
      </section>
    );
  }
}

export default FeedIconBox;
