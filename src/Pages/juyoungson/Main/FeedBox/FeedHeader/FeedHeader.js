import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./FeedHeader.scss";
import juyoung from "../../../../../Images/juyoungson/juyoung.jpg";

class FeedHeader extends Component {
  render() {
    const { account } = this.props;
    return (
      <header className="feedHeader">
        <div className="feedLeftBox">
          <img src={juyoung} alt="로그인 계정 이미지"></img>
          <Link to="/mains">{account}</Link>
        </div>
        <div className="feedRightBox">
          <Link to="/mains">
            <div className="fa-lg">
              <i className="fas fa-ellipsis-h" data-fa-transform="shrink-8"></i>
            </div>
          </Link>
        </div>
      </header>
    );
  }
}

export default FeedHeader;
