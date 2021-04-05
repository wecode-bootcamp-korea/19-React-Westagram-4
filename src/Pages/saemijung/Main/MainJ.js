import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Story from "../Story/Story";
import "./MainJ.scss";

class MainJ extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      commentList: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
    console.log(this.state.comment);
  };

  addCommentEnter = (e) => {
    if (e.key === "Enter") {
      this.handleComment();
    }
  };

  handleComment = () => {
    let comments = this.state.commentList;
    this.setState({
      commentList: comments.concat({
        comment: this.state.comment,
      }),
      comment: "",
    });
    console.log(this.state.commentList);
  };

  render() {
    return (
      <div className="Main_container">
        <Nav />
        <section className="main">
          <div className="feeds">
            <Story />
            <article className="article">
              <div className="feed_top">
                <img
                  className="feed_profile_img"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/44616351_1038813756325684_5818381853609951232_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=6aPWqqMmQZcAX8L4_kP&ccb=7-4&oh=4ab4ce79024affb2d2767e9b4a09ba78&oe=608566BA&_nc_sid=7bff83"
                  alt="프로필이미지"
                />
                <span className="feed_profile_name">sammy jung</span>
              </div>
              <div className="feed_img_box">
                <img
                  className="feed_img"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/95665924_2941705269209023_710084907836822173_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=q2aiNgDnagUAX-82r7R&ccb=7-4&oh=4c0c05c3879429a49f80d9babac98976&oe=6087C285&_nc_sid=4f375e"
                  alt="카페 사진"
                />
              </div>
            </article>
            <section className="section_left_box">
              <div className="section_btn_left">
                <button className="like"></button>
                <button className="comment_add"></button>
                <button className="share"></button>
              </div>
              <button className="bookmark"></button>
            </section>
            <section className="like_people">
              <span className="like_text"></span>
            </section>
            <section className="comment">
              <span className="comment_name">sammy</span>
              <span className="comment_text">
                레몬 파운드 케이크 맛있겠다..
              </span>
              <input
                className="comment_input"
                onChange={this.handleChange}
                onKeyPress={this.addCommentEnter}
                value={this.state.value}
                type="text"
                placeholder="댓글을 입력하세요"
              />
              <button className="comment_btn" onClick={this.handleComment}>
                게시
              </button>
              <ul>
                {this.state.commentList.map((commentText) => {
                  return (
                    <li className="comment_list">
                      <span className="comment_name">sammy</span>
                      {commentText.comment}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <div className="main_right">
            <div className="profile_right">
              <canvas className="profile_right_img">
                <img alt="나의 프로필이미지" />
              </canvas>
              <span className="profile_name"></span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainJ;
