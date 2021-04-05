import React from "react";
import "./MainP.scss";
import "../../../Styles/Common.scss";
import "../../../Styles/Reset.scss";
import _alesha98 from "../../../Images/danbipark/_alesha98.jpg";
import assiaz13 from "../../../Images/danbipark/assiaz13.jpg";
import bellyhadid from "../../../Images/danbipark/bellyhadid.jpg";
import bongyo from "../../../Images/danbipark/bongyo.jpeg";
import cest_kai from "../../../Images/danbipark/cest_kai.jpg";
import itssweetrain from "../../../Images/danbipark/itssweetrain.jpg";
import jianina_ from "../../../Images/danbipark/jianina_.jpg";
import kimdaeun_02 from "../../../Images/danbipark/kimdaeun_02.jpg";
import nakiaathome from "../../../Images/danbipark/nakiaathome.jpg";
import onni_qa from "../../../Images/danbipark/onni_qa.jpg";
import park_chaeni from "../../../Images/danbipark/park_chaeni.jpeg";
import seongjun4957 from "../../../Images/danbipark/seongjun4957.jpg";
import ssssssuin_ from "../../../Images/danbipark/ssssssuin_.jpg";
import yesol_song from "../../../Images/danbipark/yesol_song.jpg";
import ymch from "../../../Images/danbipark/ym.ch.jpg";

class Main extends React.Component {
  state = {
    userComment: "",
    userComments: [],
  };

  createText = (e) => {
    this.setState({
      userComment: e.target.value,
    });
  };

  addText = (e) => {
    const addTextList = this.state.userComments;
    addTextList.push(this.state.userComment);
    this.setState({
      userComments: this.state.userComments,
      userComment: "",
    });
  };

  handleClick = (e) => {
    this.addText();
  };

  handleEnter = (e) => {
    if (e.key === "Enter") {
      this.addText();
    }
  };

  render() {
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
                    <img src={ymch} />
                    <span>ya.ch</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={yesol_song} />
                    <span>yemin_song</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={jianina_} />
                    <span>jianima_</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={cest_kai} />
                    <span>cest_kei</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={bellyhadid} />
                    <span>ballyhadid</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={_alesha98} />
                    <span>_alesha99</span>
                  </div>
                </li>
                <li className="stories-content">
                  <div className="img-border">
                    <img src={ssssssuin_} />
                    <span>sssmin_</span>
                  </div>
                </li>
              </ul>
            </header>

            <article className="main-container">
              <header>
                <div className="user-info">
                  <img src={park_chaeni} className="user-avatar" />
                  <div>chaeniblossom</div>
                </div>
                <div className="more-btn">
                  <svg
                    aria-label="옵션 더 보기"
                    fill="#262626"
                    height="16"
                    viewBox="0 0 48 48"
                    width="16"
                  >
                    <circle
                      clip-rule="evenodd"
                      cx="8"
                      cy="24"
                      fill-rule="evenodd"
                      r="4.5"
                    ></circle>
                    <circle
                      clip-rule="evenodd"
                      cx="24"
                      cy="24"
                      fill-rule="evenodd"
                      r="4.5"
                    ></circle>
                    <circle
                      clip-rule="evenodd"
                      cx="40"
                      cy="24"
                      fill-rule="evenodd"
                      r="4.5"
                    ></circle>
                  </svg>
                </div>
              </header>

              <img src={bongyo} className="user-feed" />
              <div className="user-react">
                <svg
                  aria-label="좋아요 취소"
                  className="_8-yf5 "
                  fill="#ed4956"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
                <svg
                  aria-label="댓글 달기"
                  className="_8-yf5 "
                  fill="#262626"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  aria-label="게시물 공유"
                  className="_8-yf5 "
                  fill="#262626"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                </svg>
                <svg
                  aria-label="저장"
                  className="icon-storage"
                  fill="#262626"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                </svg>
              </div>
              <div className="user-comment">
                <span>
                  <strong>bangtajoys</strong>님 <strong>여러 명</strong>이
                  좋아합니다
                </span>
                <span>
                  <strong>chaeniblossom</strong>&nbsp;6개월만에 갔더니 신상
                  소금빵이 생겼다. 행복하다.
                </span>
                <span>#베이커리봉교 #봉교</span>
                <span>댓글 13개 모두 보기</span>
                <span>
                  <strong>itssweetrain</strong> 시켜줘 명예봉교지킴이
                </span>
                <span>
                  <strong>en_nyya_</strong>한입만🥖
                </span>
                <span>6시간 전</span>

                <ul className="add-comment">
                  {this.state.userComments.map((comment) => (
                    <li>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <strong>itssweetrain </strong>
                      {comment}
                    </li>
                  ))}
                </ul>
                <div className="comment-container">
                  <input
                    type="text"
                    className="input-comment"
                    onChange={this.createText}
                    onKeyPress={this.handleEnter}
                    value={this.state.userComment}
                  />
                  <button className="upload-button" onClick={this.handleClick}>
                    게시
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="main-right-container">
            <aside className="aside-container">
              <div className="my-info">
                <img src={itssweetrain} />
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
                    <img src={nakiaathome} />
                    <div className="friends-info-spec">
                      <span>
                        <strong>nakiaathome</strong>
                      </span>
                      <span className="add-info">회원님을 팔로우합니다</span>
                    </div>
                    <span>팔로우</span>
                  </li>
                  <li className="friends-info">
                    <img src={onni_qa} />
                    <div className="friends-info-spec">
                      <span>
                        <strong>onni_qa</strong>
                      </span>
                      <span className="add-info">회원님을 위한 추천</span>
                    </div>
                    <span>팔로우</span>
                  </li>
                  <li className="friends-info">
                    <img src={seongjun4957} />
                    <div className="friends-info-spec">
                      <span>
                        <strong>seongjun4957</strong>
                      </span>
                      <span className="add-info">회원님을 위한 추천</span>
                    </div>
                    <span>팔로우</span>
                  </li>
                  <li className="friends-info">
                    <img src={assiaz13} />
                    <div className="friends-info-spec">
                      <span>
                        <strong>assiiaz13</strong>
                      </span>
                      <span className="add-info">회원님을 위한 추천</span>
                    </div>
                    <span>팔로우</span>
                  </li>
                  <li className="friends-info">
                    <img src={kimdaeun_02} />
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
