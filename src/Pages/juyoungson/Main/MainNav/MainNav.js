import React, { Component } from "react";
import instaLogo from "../../../../Images/juyoungson/instagramLogo.png";
import juyoung from "../../../../Images/juyoungson/juyoung.jpg";
import "./MainNav.scss";

class MainNav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="navWrapper">
          <div className="navContentWrapper">
            <div className="logoBox">
              <img src={instaLogo} alt="인스타그램 로고" />
            </div>
            <div className="navInputWrapper">
              <input type="text" placeholder="검색" />
              <div className="inputContent"></div>
            </div>
            <div className="navIconWrapper">
              <div className="iconFlexBox">
                <div className="iconControlBox">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                    alt="메세지창"
                  />
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    alt="좋아요"
                  />
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                    alt="더보기"
                  />
                  <img className="profileImg" src={juyoung} alt="로그인 계정 이미지"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNav;
