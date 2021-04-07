import React from "react";
import Feed from "./Feed/Feed";
import _alesha98 from "../../../Images/danbipark/_alesha98.jpg";
import assiaz13 from "../../../Images/danbipark/assiaz13.jpg";
import bellyhadid from "../../../Images/danbipark/bellyhadid.jpg";
import cest_kai from "../../../Images/danbipark/cest_kai.jpg";
import itssweetrain from "../../../Images/danbipark/itssweetrain.jpg";
import jianina_ from "../../../Images/danbipark/jianina_.jpg";
import kimdaeun_02 from "../../../Images/danbipark/kimdaeun_02.jpg";
import nakiaathome from "../../../Images/danbipark/nakiaathome.jpg";
import onni_qa from "../../../Images/danbipark/onni_qa.jpg";
import seongjun4957 from "../../../Images/danbipark/seongjun4957.jpg";
import ssssssuin_ from "../../../Images/danbipark/ssssssuin_.jpg";
import yesol_song from "../../../Images/danbipark/yesol_song.jpg";
import ymch from "../../../Images/danbipark/ym.ch.jpg";
import "./MainP.scss";
import "../../../Styles/Common.scss";
import "../../../Styles/Reset.scss";

class Main extends React.Component {
  state = {
    feedLists: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/data/FeedData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feedLists: data,
        });
      });
  }

  render() {
    const { feedLists } = this.state;

    return (
      <>
        <nav className="nav-bar container">
          <div className="nav-bar">
            <div className="insta-logo container">
              <i className="fab fa-instagram"></i>
              <span className="insta-text">Westagram</span>
            </div>
            <div className="search container">
              <input type="text" className="search-bar" />
              <i className="fas fa-search"></i>
              <span className="search-text">검색</span>
            </div>
            <div className="img container">
              <i className="far fa-compass"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-user"></i>
            </div>
          </div>
        </nav>
        <div className="all-container">
          <div className="main-left-container">
            <header className="stories-container">
              <ul>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={ymch} alt="ya.ch" />
                    <span>ya.ch</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={yesol_song} alt="yemin_song" />
                    <span>yemin_song</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={jianina_} alt="jianima_" />
                    <span>jianima_</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={cest_kai} alt="cest_kei" />
                    <span>cest_kei</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={bellyhadid} alt="ballyhadid" />
                    <span>ballyhadid</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={_alesha98} alt="_alesha99" />
                    <span>_alesha99</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={ssssssuin_} alt="sssmin_" />
                    <span>sssmin_</span>
                  </div>
                </li>
              </ul>
            </header>

            {feedLists.map((feed) => {
              return (
                <Feed
                  key={feed.id}
                  avatarImg={feed.avatarImg}
                  userName={feed.userName}
                  img={feed.img}
                  content={feed.content}
                  hashtag={feed.hashtag}
                  friendsName={feed.friendsName}
                  friendsComment={feed.friendsComment}
                />
              );
            })}
          </div>

          <div className="main-right-container">
            <aside className="aside-container">
              <div className="my-info">
                <img src={itssweetrain} alt="itssweetrain" />
                <div className="my-info-spec">
                  <span>
                    <strong>itssweetrain</strong>
                  </span>
                  <span>Danbi</span>
                </div>
              </div>

              <div className="friends-list">
                <div>
                  <strong>회원님을 위한 추천</strong>
                </div>
                <ul>
                  <li className="friends-info">
                    <img src={nakiaathome} alt="nakiaathome" />
                    <div className="friends-info-spec">
                      <span>
                        <strong>nakiaathome</strong>
                      </span>
                      <span className="add-info">회원님을 팔로우합니다</span>
                    </div>
                    <span>팔로우</span>
                  </li>
                  <li className="friends-info">
                    <img src={onni_qa} alt="onni_qa" />
                    <div className="friends-info-spec">
                      <span>
                        <strong>onni_qa</strong>
                      </span>
                      <span className="add-info">회원님을 위한 추천</span>
                    </div>
                    <span>팔로우</span>
                  </li>
                  <li className="friends-info">
                    <img src={seongjun4957} alt="seongjun4957" />
                    <div className="friends-info-spec">
                      <span>
                        <strong>seongjun4957</strong>
                      </span>
                      <span className="add-info">회원님을 위한 추천</span>
                    </div>
                    <span>팔로우</span>
                  </li>
                  <li className="friends-info">
                    <img src={assiaz13} alt="assiaz13" />
                    <div className="friends-info-spec">
                      <span>
                        <strong>assiiaz13</strong>
                      </span>
                      <span className="add-info">회원님을 위한 추천</span>
                    </div>
                    <span>팔로우</span>
                  </li>
                  <li className="friends-info">
                    <img src={kimdaeun_02} alt="kimdaeun_02" />
                    <div className="friends-info-spec">
                      <span>
                        <strong>kimdaeun_02</strong>
                      </span>
                      <span className="add-info">회원님을 위한 추천</span>
                    </div>
                    <span>팔로우</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
