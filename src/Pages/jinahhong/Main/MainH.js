import React from "react";
import "./MainH.scss";
import "./ResetH.scss";
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
    arr.push({
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
              <article className="main_slider">
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/108280087_189961005879338_3163191042181326990_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=NKCkfr1GIvsAX_AtwI3&ccb=7-4&oh=cea08b6720c7f59e95e6bef526b755c8&oe=6087CCF5&_nc_sid=48a2a6"
                  alt="friend_profile1"
                />
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/52058121_151221745890901_1150664683572843441_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=YJbvJ1Wy8ZsAX9e3_lW&ccb=7-4&oh=2c650b147247b2846c0d1b1094aee685&oe=60874A77&_nc_sid=4efc9f"
                  alt="friend_profile2"
                />
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/91183333_213850646503394_3038439918809382912_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=rhPWV1R8tPAAX8bSdeO&ccb=7-4&oh=722a4333b1907cdef910634d8eeb3d66&oe=60856444&_nc_sid=7bff83"
                  alt="friend_profile3"
                />
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/164603314_769950936997353_6133901918939853803_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=OoB4Yfpyn-MAX-ct6IN&ccb=7-4&oh=2f7347c124f191690767a0f09b0290a7&oe=6087FF55&_nc_sid=7bff83"
                  alt="friend_profile4"
                />
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/139811010_111553454205620_4585783304857208336_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=RmmUNgeD6IAAX91wbhZ&ccb=7-4&oh=39b3071953a562ac7449d6456527765e&oe=6087A200&_nc_sid=7bff83"
                  alt="friend_profile5"
                />
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/91266759_241663626961399_3371481003020255232_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=2qIRczJdwmgAX8sLPe-&ccb=7-4&oh=814bc8c1dee45ef36ee2924528a1dfd6&oe=6085B207&_nc_sid=7bff83"
                  alt="friend_profile6"
                />
                <img
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/117375111_340699517317255_1475853099829297185_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=X7R7DB8lbrcAX-iHl-j&ccb=7-4&oh=f3588f6aee60faf584c8eec67cfedf64&oe=6088277A&_nc_sid=7bff83"
                  alt="friend_profile7"
                />
              </article>
              <article className="main_left_feeds">
                <div className="feeds_navbar">
                  <div className="feeds_navbar_left">
                    <img
                      src={cute}
                      alt="my_profile"
                      className="feeds_navbar_profile"
                    />
                    {/* <img src="/images/cute.png" /> */}
                    <span className="feeds_navbar_user bold_Name">
                      minimal__time
                    </span>
                  </div>
                  <i className="fas fa-ellipsis-h" />
                </div>
                <div className="feed_images">
                  <img src={cute} />
                  {/* <img src="/images/cute.png" /> */}
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
                        <ul className="textbox">
                            {this.state.replies.map((el) => (
                                <li>{el.text}</li>
                            ))}
                        </ul>
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
                    {/* <input
                      type="text"
                      id="feed_info_comment_input"
                      placeholder="댓글 달기"
                    />
                    <button
                      id="feed_info_comment_submit"
                      type="submit"
                      value="Send"
                    >
                      게시
                    </button> */}
                  </div>
                  {/* <p id="para" /> */}
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
                  <ul className="main_right_recommendation_list">
                    <li>
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/162455812_200050408122385_2459611522484184098_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Q8ZjmvEN_soAX9ACxIC&ccb=7-4&oh=3744de49b05b45e009482223bb322179&oe=60861D9B&_nc_sid=7bff83"
                        alt="user profile image"
                      />
                      <div className="main_right_recommendation_name">
                        <span className="bold_Name">_hamzzi_s2</span>
                        <span>jamse님이 팔로우합니다</span>
                      </div>
                      <button>팔로우</button>
                    </li>
                    <li>
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/109836048_295412908182256_8520826260824824654_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=VQdztnUHETQAX_wLnpH&ccb=7-4&oh=516099ce462a4bde09aaa31762783e8d&oe=608521C7&_nc_sid=7bff83"
                        alt="user profile image"
                      />
                      <div className="main_right_recommendation_name">
                        <span className="bold_Name">j.seowoo_</span>
                        <span>_sunny_eu님 외 3명이 팔로우합니다</span>
                      </div>
                      <button>팔로우</button>
                    </li>
                    <li>
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/118194120_786119195470284_82279683163027937_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=BziISsqA5B8AX8N_JQB&ccb=7-4&oh=cfb592586ca2f3250112e8e5544d4d33&oe=60859A11&_nc_sid=7bff83"
                        alt="user profile image"
                      />
                      <div className="main_right_recommendation_name">
                        <span className="bold_Name">jerri_ve</span>
                        <span>jami_orange님이 팔로우합니다</span>
                      </div>
                      <button>팔로우</button>
                    </li>
                    <li>
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/90089832_2319120081718489_3573740135499431936_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=cc9FAjgJaAUAX82PA_M&ccb=7-4&oh=b671e3458e37d84e9cf812f9f3649c4d&oe=60858F58&_nc_sid=7bff83"
                        alt="user profile image"
                      />
                      <div className="main_right_recommendation_name">
                        <span className="bold_Name">lavniz__official</span>
                        <span>orange님이 팔로우합니다</span>
                      </div>
                      <button>팔로우</button>
                    </li>
                    <li>
                      <img
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/121236058_186781606313923_4019538561759748570_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=DB-fcuo2waIAX9zWCRN&ccb=7-4&oh=1f42b0de7734d6c3473975b678647375&oe=6088C27E&_nc_sid=7bff83"
                        alt="user profile image"
                      />
                      <div className="main_right_recommendation_name">
                        <span className="bold_Name">daldal_c_</span>
                        <span>lazye님이 팔로우합니다</span>
                      </div>
                      <button>팔로우</button>
                    </li>
                  </ul>
                </article>
                <ul className="main_right_footer">
                  <li>
                    <a href="#">소개 ·</a>
                  </li>
                  <li>
                    <a href="#">도움말 ·</a>
                  </li>
                  <li>
                    <a href="#">홍보 센터 ·</a>
                  </li>
                  <li>
                    <a href="#">API ·</a>
                  </li>
                  <li>
                    <a href="#">채용 정보 ·</a>
                  </li>
                  <li>
                    <a href="#">개인정보처리방침 ·</a>
                  </li>
                  <li>
                    <a href="#">약관 ·</a>
                  </li>
                  <li>
                    <a href="#">위치 ·</a>
                  </li>
                  <li>
                    <a href="#">인기 계정 ·</a>
                  </li>
                  <li>
                    <a href="#">해시태그 ·</a>
                  </li>
                  <li>
                    <a href="#">언어</a>
                  </li>
                  <div>© 2021 WESTAGRAM FROM FACEBOOK</div>
                </ul>
              </section>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default MainH;
