import React from "react";
import "./MainH.scss";
import "./ResetH.scss";
import Slider from "./Slider";
import Footer from "./Footer";
import Child from "./Child";
import Recommendation from "./Recommendation";
import cute from "../../../Images/jinahHong/cute.jpg";
import dm from "../../../Images/jinahHong/dm.png";



class MainH extends React.Component {
    constructor() {
    super();
    this.state = {
        newReply: "",
        replies: [
            {
                text: "",
            },
        ],
    };
  }

  textChange = (e) => {
    this.setState({
        newReply: e.target.value,
    });
  };

  add = () => {
    let arr = this.state.replies;
    arr.concat({
        text: this.state.newReply,
    });

    this.setState({
        replies: arr,
        newReply: "",
    });
  };
  render() {
    return (
      <div>
        <div className="main_body">
          <nav id="nav">
            <div className="nav_title">
              <span className="nav_title_logo">Westagram</span>
            </div>
            <div className="search">
              <i className="fas fa-search" />
              <input type="text" placeholder="검색" />
            </div>
            <div className="nav_icons">
              <button>
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  alt="explore"
                />
              </button>
              <button>
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="heart"
                />
              </button>
              <button>
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt="profile"
                />
              </button>
            </div>
          </nav>

          <main id="main_container">
            <section className="main_left">
              <Slider />
              <article className="main_left_feeds">
                <div className="feeds_navbar">
                  <div className="feeds_navbar_left">
                    <img
                      src={cute}
                      alt="my_profile"
                      className="feeds_navbar_profile"
                    />
                    <span className="feeds_navbar_user bold_Name">
                      minimal__time
                    </span>
                  </div>
                  <i className="fas fa-ellipsis-h" />
                </div>
                <div className="feed_images">
                  <img src={cute} />
                </div>
                <div className="feeds_info">
                  <div className="feeds_info_icons">
                    <div className="feeds_info_icons_left">
                      <i className="far fa-heart fa-2x" />&nbsp;&nbsp;&nbsp;
                      <i className="far fa-comment fa-2x" />&nbsp;&nbsp;&nbsp;
                      <img src={dm} alt="dm img" />
                    </div>
                    <div className="feeds_info_icons_right">
                      <i className="far fa-bookmark fa-2x" />
                    </div>
                  </div>
                  <div className="feeds_info_description">
                    <div className="feeds_info_description_like">
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/120210036_354790015642964_2320574806492717717_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=C8uWfvwBSf8AX_ZSfd2&ccb=7-4&oh=509ab33ed5de06eaafc8d0671d907cdb&oe=60885E95&_nc_sid=a9513d"
                        alt="like friend"
                      />&nbsp;&nbsp;&nbsp;
                      <b>max__walwal</b>님 외 <b>11명</b>이 좋아합니다.
                    </div>
                    <span className="feeds_info_description_user">
                      <b>minimal__time</b>&nbsp;&nbsp;
                    </span>
                    <span className="feeds_info_description_text">
                      길을 잃었다. 도와주세요!
                    </span>
                    <br />
                    <span className="feeds_info_description_day">1일 전</span>
                  </div>
                  <div className="feeds_info_comment">
                  <div>

                      <div>
                        <div className="textbox">
                          <Child commentList={this.state.replies}/>
                        </div>
                      </div>
                    </div>
                  <div className="comment_border_line">
                    <button className="feed_info_comment_emoji">
                      <i className="far fa-smile fa-2x" />
                    </button>
                    <input
                      id = "feed_info_comment_input"
                      type="text"
                      placeholder="댓글달기..."
                      onChange={this.textChange}
                      onKeyPress={this.pressEnter}
                      value={this.state.newReply}
                      />
                      <button id="feed_info_comment_submit" onClick={this.add}>게시</button>
                  </div>
                  </div>
                  </div>
              </article>
            </section>
            <div className="main_right_container">
              <section className="main_right">
                <article className="main_right_user_profile">
                  <img
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/136096342_252173229592327_4334399041494890300_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=aJEWHeB_KGEAX9bIKu-&ccb=7-4&oh=58f84b91336179e9aa2e4c3ee198a6f3&oe=6087EE76&_nc_sid=7bff83"
                    alt="user profile image"
                  />
                  <div className="main_right_user_profile_name">
                    <span className="bold_Name">minimal__time</span>
                    <span>DAKU</span>
                  </div>
                  <button>전환</button>
                </article>
                <article className="main_right_recommendation">
                  <span>회원님을 위한 추천</span>&nbsp;&nbsp;&nbsp;
                  <button>모두 보기</button>
                  <Recommendation />
                </article>
               <Footer />
              </section>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default MainH;
