import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./MainRecommendBox.scss";
import juyoung from "../../../../Images/juyoungson/juyoung.jpg";

class MainRecommendBox extends Component {
    render() {
        return (
            <aside className="MainRecommendBox">
              <div className="recommendProfile">
                <img className="profileImg" src={juyoung} alt="로그인 계정 이미지"></img>
                <div className="profileName">
                  <Link to="/mains">95.s.guri</Link>
                  <span>손주영</span>
                </div>
                <div className="followBox">
                  <button className="followtBtn">전환</button>
                </div>
              </div>
              <div className="recommendMe">
                <div>
                  <span>회원님을 위한 추천</span>
                </div>
                <div>
                  <button className="followtBtn">모두 보기</button>
                </div>
              </div>

              <div className="recommendedProfile">
                <div className="recommendedImg">
                  <img src={juyoung} alt="로그인 계정 이미지" />
                </div>

                <div className="profileName">
                  <Link to="/mains">95.s.guri</Link>
                  <span>Instagram 신규 가입</span>
                </div>

                <div className="followBox">
                  <button className="followtBtn">팔로우</button>
                </div>
              </div>
            </aside>
        );
    }
}

export default MainRecommendBox;