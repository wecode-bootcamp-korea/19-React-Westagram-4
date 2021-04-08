import React, { Component } from "react";
import imgH from "../Images/home.png";
import imgD from "../Images/dm.png";
import imgE from "../Images/explore.png";
import imgHeart from "../Images/heart.png";
import imgP from "../Images/profile.png";
import imgI from "../Images/instagram.png";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="top">
          <div className="logo_box">
            <img className="insta_log" alt="인스타 이미지 로고" src={imgI} />
            <img
              className="insta_txt"
              alt="인스타 텍스트 로고"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            />
          </div>
          <div className="search">
            <div className="search_box">
              <i className="fas fa-search"></i>
              <input className="search_txt" placeholder="검색"></input>
            </div>
          </div>
          <div className="right_box">
            <img className="icons" src={imgH} alt="집" />
            <img className="icons" src={imgD} alt="DM" />
            <img className="icons" src={imgE} alt="나침반" />
            <img className="icons" src={imgHeart} alt="하트" />
            <img className="icons" src={imgP} alt="프로필 이미지" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
