import React, { Component } from "react";
import Comment from "./Comment/Comment";
import "./FeedFooterBox.scss";

class FeedFooterBox extends Component {
  constructor(props) {
    super(props);
    this.deleteCommentBtn = this.deleteCommentBtn.bind(this);
  }

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
    console.log(commentList);
  };

  render() {
    const { createCommnetBtn, deleteCommentBtn, inputComment } = this;
    const { commentList } = this.state;
    return (
      <section className="feedFooterBox">
        <section className="likeBox">
          <a href="">
            좋아요 <span>23</span>개
          </a>
        </section>
        <Comment commentList={commentList} deleteCommentBtn={deleteCommentBtn}/>
        <div className="inputCommentBox">
          <form className="inputCommentForm" action="">
            <button className="smileButton">
              <i className="far fa-smile fa-2x"></i>
            </button>
            <textarea
              className="inputComment"
              rows="1"
              cols="3"
              onChange={inputComment}
            ></textarea>
            <button className="submitButton" onClick={createCommnetBtn}>
              게시
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default FeedFooterBox;
