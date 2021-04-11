import React from "react";

import Slider from "./components/Slider";
import TextComment from "./components/TextComment";
import Footer from "./components/Footer";
import NavIcons from "./components/NavIcons";
import Recommendation from "./components/Recommendation";

import "./MainH.scss";
import "./ResetH.scss";

class MainH extends React.Component {
  constructor() {
    super();
    this.state = {
      newReply: "",
      replies: [{ text: "" }],
    };
  }

  componentDidMount() {
    fetch("data/jinahHong/FeedData.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ replies: data });
      });
  }

  add = () => {
    const { replies, newReply } = this.state;
    let arr = replies;
    arr.concat({
      text: newReply,
    });

    this.setState({
      replies: arr,
      newReply: "",
    });
  };

  render() {
    const { replies, newReply } = this.state;
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
              <NavIcons />
            </div>
          </nav>
          <div className="mainCenter">
            <main id="main_container">
              <section className="main_left">
                <Slider />
                <article className="main_left_feeds">
                  <div className="feeds_navbar">
                    <div className="feeds_navbar_left">
                      <img
                        src="/images/cute.jpg"
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
                    <img src="/images/cute.jpg" />
                  </div>
                  <div className="feeds_info">
                    <div className="feeds_info_icons">
                      <div className="feeds_info_icons_left">
                        <i className="far fa-heart fa-2x" />
                        &nbsp;&nbsp;&nbsp;
                        <i className="far fa-comment fa-2x" />
                        &nbsp;&nbsp;&nbsp;
                        <img src="/images/dm.png" alt="dm img" />
                      </div>
                      <div className="feeds_info_icons_right">
                        <i className="far fa-bookmark fa-2x" />
                      </div>
                    </div>
                    <div className="feeds_info_description">
                      <div className="feeds_info_description_like">
                        <img src="/images/rose.jpg" alt="like friend" />
                        &nbsp;&nbsp;&nbsp;
                        <b>max__walwal</b>님 외 <b>11명</b>이 좋아합니다.
                      </div>
                      <span className="feeds_info_description_user">
                        <b>minimal__time</b>&nbsp;&nbsp;
                      </span>
                      <span className="feeds_info_description_text">
                        귀여운 우리 모찌😘❤ 건강하게만 자라줘🤞
                      </span>
                      <br />
                      <span className="feeds_info_description_day">1일 전</span>
                    </div>
                    <TextComment
                      newComment={this.state.newReply}
                      commentList={replies}
                    />
                  </div>
                </article>
              </section>
              <div className="main_right_container">
                <section className="main_right">
                  <article className="main_right_user_profile">
                    <img src="/images/minimal.jpg" alt="user profile image" />
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
      </div>
    );
  }
}

export default MainH;
