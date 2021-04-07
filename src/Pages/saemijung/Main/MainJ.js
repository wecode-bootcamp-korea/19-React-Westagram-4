import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Story from "../Story/Story";
import Comments from "./Comment/Comments";
import CommentList from "./Comment/CommentList";
import imgHeart from "../Images/heart.png";
import imgD from "../Images/dm.png";
import imgS from "../Images/speech.png";
import imgB from "../Images/bookmark.png";

import "./MainJ.scss";
// import COMMENT from "./Comment/commentData";

class MainJ extends Component {
  constructor() {
    super();
    this.state = {
      commentId: "sammy",
      commentValue: "",
      commentList: [],
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     commentList: COMMENT,
  //   });
  // }

  componentDidMount() {
    fetch("http://localhost:3000/data/commentData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          commentList: data,
        });
      });
  }

  handleChange = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
    // console.log(this.state.commentValue);
  };

  addCommentEnter = (e) => {
    if (e.key === "Enter") {
      this.addComment();
    }
  };

  addComment = () => {
    // let commentList = this.state.commentList;
    // console.log(comments);
    const { commentList, commentValue } = this.state;

    this.setState({
      // commentList: commentList.concat({
      //   commentValue: this.state.commentValue,
      // }),
      // commentValue: "",
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: "sammy",
          content: commentValue,
          isLiked: false,
        },
      ],
      commentValue: "",
    });
    // console.log(this.state.commentList);
  };

  render() {
    return (
      <div className="Main_container">
        <Nav />
        <section className="main">
          <Story />
          <div className="feeds">
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
            <section className="left_box">
              <div className="btn_left">
                <button className="like">
                  <img className="icons" src={imgHeart} alt="하트" />
                </button>
                <button className="comment_add">
                  <img className="icons" src={imgS} alt="코멘트" />
                </button>
                <button className="share">
                  <img className="icons" src={imgD} alt="DM" />
                </button>
              </div>
              <button className="bookmark">
                <img className="icons" src={imgB} alt="북마크" />
              </button>
            </section>
            <section className="like_people">
              <span className="like_text"></span>
            </section>
            <section className="comment">
              <div className="mock_comment">
                <span className="comment_name">sammy</span>
                <span className="comment_text">
                  레몬 파운드 케이크 맛있겠다..
                </span>
              </div>
              <ul>
                {this.state.commentList.map((comment) => {
                  return (
                    <CommentList
                      key={comment.id}
                      clickEvent={this.changeColor}
                      name={comment.userName}
                      comment={comment.content}
                    />
                  );
                })}
              </ul>
              {/* <ul>
                {this.state.commentList.map((commentText, idx) => {
                  return (
                    <Comments
                      key={idx}
                      id={idx}
                      userId={this.state.commentId}
                      content={commentText.content}
                    />
                  );
                })}
              </ul> */}
            </section>
            <div className="comment_add">
              <input
                className="comment_input"
                onChange={this.handleChange}
                onKeyPress={this.addCommentEnter}
                // value={this.state.value}
                value={this.state.commentValue}
                type="text"
                placeholder="댓글을 입력하세요"
              />
              <button className="comment_btn" onClick={this.addComment}>
                게시
              </button>
            </div>
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
