import React, { Component } from 'react';
import "./MainRecommendBox.scss";
import juyoung from "../../../../Images/juyoungson/juyoung.jpg";

class MainRecommendBox extends Component {
    render() {
        return (
            <aside className="MainRecommendBox">
              <div className="recommendProfile">
                <img className="profileImg" src={juyoung}></img>
                <div className="profileName">
                  <a href="">95.s.guri</a>
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
                  <img src={juyoung} alt="" />
                </div>

                <div className="profileName">
                  <a href="">95.s.guri</a>
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