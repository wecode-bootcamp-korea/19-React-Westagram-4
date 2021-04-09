import CommentList from "./Comment/CommentList";
import imgHeart from "../Images/heart.png";
import imgD from "../Images/dm.png";
import imgS from "../Images/speech.png";
import imgB from "../Images/bookmark.png";
import imgSm from "../Images/smile.png";
import React, { Component } from "react";
import "./Feed.scss";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
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
    fetch("/data/commentData.json")
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
      <li id={this.props.key} className="FEED">
        <div className="feeds">
          <article className="article">
            <div className="feed_top">
              <img
                className="feed_profile_img"
                src={this.props.userImgUrl}
                alt="프로필이미지"
              />
              <span className="feed_profile_name">{this.props.userName}</span>
            </div>
            <div className="feed_img_box">
              <img
                className="feed_img"
                src={this.props.conetentImg}
                alt="피드 사진"
              />
            </div>
          </article>
          <section className="left_box">
            <div className="btn_left">
              <button className="like">
                <img className="icons" src={imgHeart} alt="하트" />
              </button>
              <button className="comment_icon">
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
          <section class="before_comment">
            <div className="content_test">
              <span className="like_people">a___hyun22님 외 </span>
              <span>여러 명이 좋아합니다</span>
            </div>
            <div className="content">{this.props.content}</div>
            <section className="comment">
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
                      userId={this.state.commentId}
                      content={commentText.content}
                    />
                  );
                })}
              </ul> */}
            </section>
          </section>
          <div className="comment_add">
            <img className="comment_smile" src={imgSm} alt="코멘트 이모티콘" />
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
      </li>
    );
  }
}

export default Feed;
