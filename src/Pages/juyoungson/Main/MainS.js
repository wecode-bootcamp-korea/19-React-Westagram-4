import React, { Component } from "react";
import facebook from '../../../Images/juyoungson/facebook.png';
import instagramLogo from '../../../Images/juyoungson/instagramLogo.png'

class MainS extends Component {
  state = {
    value: "",
    id: 0,
    commentList: [],
  };

  inputComment = (e) => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      value,
    });
  };

  createCommnetBtn = (e) => {
    e.preventDefault();
    const { commentList, value } = this.state;
    this.setState({
      commentList: commentList.concat({
        id: this.state.id++,
        value,
      }),
    });
  };

  deleteCommentBtn = (id) => {
    const { commentList } = this.state;
    this.setState({
      ...commentList,
      commentList: commentList.filter((commnet) => commnet.id !== id),
    });
  };
  render() {
    const { commentList } = this.state;
    return (
      <>
        <nav className="Nav">
          <div className="navWrapper">
            <div className="navContentWrapper">
              <div className="logoBox">
                <img src="./images/instagramLogo.png" alt="인스타그램 로고" />
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
                    <img
                      className="profileImg"
                      src="./images/juyoung.jpg"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="mainWrapper">
          <section className="mainBoxWrapper">
            <div className="mainBox">
              <nav className="MainHead">
                <ul className="headBox">
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="headImgBox">
                        <img src="images/juyoung.jpg" alt="" />
                      </div>
                      <span>sonju</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <article className="MainFeed">
                <div className="feedBox">
                  <header className="feedHeader">
                    <div className="feedLeftBox">
                      <img src="./images/juyoung.jpg"></img>
                      <a className="" href="">
                        ilyewis_
                      </a>
                    </div>
                    <div className="feedRightBox">
                      <a href="">
                        <div className="fa-lg">
                          <i
                            className="fas fa-ellipsis-h"
                            data-fa-transform="shrink-8"
                          ></i>
                        </div>
                      </a>
                    </div>
                  </header>

                  <div className="feedImgBox">
                    <img src="./images/cat.jpg" alt="" />
                  </div>

                  <section className="footerIconBox">
                    <div className="footerLeft">
                      <img
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                        alt="좋아요"
                      />
                      <i className="far fa-comment fa-2x"></i>
                      <img src="./images/message.png" alt="" />
                    </div>

                    <div className="footerRight">
                      <i className="far fa-bookmark fa-2x"></i>
                    </div>
                  </section>

                  <section className="feedFooterBox">
                    <section className="likeBox">
                      <a href="">
                        좋아요 <span>23</span>개
                      </a>
                    </section>
                    <div className="commentBox">
                      {commentList.map((comment) => {
                        return (
                          <div key={comment.id}>
                            <a>nickName</a>
                            <span>{`${comment.value}`}</span>
                            <i className="fas fa-heart likeIcon"></i>
                            <button
                              onClick={() => this.deleteCommentBtn(comment.id)}
                            >
                              X
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className="inputCommentBox">
                      <form className="inputCommentForm" action="">
                        <button className="smileButton">
                          <i className="far fa-smile fa-2x"></i>
                        </button>
                        <textarea
                          className="inputComment"
                          rows="1"
                          cols="3"
                          onChange={this.inputComment}
                        ></textarea>
                        <button
                          className="submitButton"
                          onClick={this.createCommnetBtn}
                        >
                          게시
                        </button>
                      </form>
                    </div>
                  </section>
                </div>
              </article>
            </div>

            <aside className="MainRecommendBox">
        <div className="recommendProfile">
          <img className="profileImg" src="./images/juyoung.jpg"></img>
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
            <img src="images/juyoung.jpg" alt="" />
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
          </section>
        </main>
      </>
    );
  }
}

export default MainS;
