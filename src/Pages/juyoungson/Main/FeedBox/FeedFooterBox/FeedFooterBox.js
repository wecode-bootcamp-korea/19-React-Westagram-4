import React, { Component } from "react";
import Comment from "./Comment/Comment";
import "./FeedFooterBox.scss";
import { Link } from "react-router-dom";

class FeedFooterBox extends Component {
  constructor(props) {
    super(props);
    this.deleteCommentBtn = this.deleteCommentBtn.bind(this);
    this.chgLikeColor = this.chgLikeColor.bind(this);
  }

  state = {
    value: "",
    commentList: [],
    submitBtnColor: "submitButtonFalse",
  };

  inputComment = (e) => {
    const { value } = e.target;
    this.setState(
      {
        ...this.state,
        value,
      },
      this.chgSubmitBtn
    );
  };

  chgSubmitBtn = () => {
    const { value } = this.state;
    value.length > 0
      ? this.setState({ submitBtnColor: "submitButtonTrue" })
      : this.setState({ submitBtnColor: "submitButtonFalse" });
  };

  createCommnetBtn = (e) => {
    e.preventDefault();
    const { commentList, value } = this.state;
    if (value) {
      this.setState({
        commentList: commentList.concat({
          id: commentList.length + 1,
          userName: "userName",
          value,
          isLiked: true,
        }),
        value: "",
      });
    }
    console.log(commentList)
    console.log(commentList.length)
  };

  deleteCommentBtn = (commentId) => {
    const { commentList } = this.state;
    this.setState({
      ...commentList,
      commentList: commentList.filter((commnet) => commnet.id !== commentId),
    });
  };

  chgLikeColor = (commentId) => {
    const { commentList } = this.state;
    this.setState({
      commentList: commentList.map((comment) => {
        if (comment.id === commentId) {
          comment.isLiked = !comment.isLiked;
        }
        return comment;
      }),
    });
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/juyoungson/commentData.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        commentList : data,
      })
    })
  }

  render() {
    const {
      createCommnetBtn,
      deleteCommentBtn,
      inputComment,
      chgLikeColor,
    } = this;
    const { commentList } = this.state;
    return (
      <section className="feedFooterBox">
        <section className="likeBox">
          <Link to="">
            좋아요 <span>23</span>개
          </Link>
        </section>
        <Comment
          commentList={commentList}
          deleteCommentBtn={deleteCommentBtn}
          chgLikeColor={chgLikeColor}
        />
        <div className="inputCommentBox">
          <form className="inputCommentForm" action="">
            <button className="smileButton">
              <i className="far fa-smile fa-2x"></i>
            </button>
            <input
              className="inputComment"
              placeholder="댓글 달기..."
              value={this.state.value}
              rows="1"
              cols="3"
              onChange={inputComment}
            ></input>
            <button
              className={this.state.submitBtnColor}
              onClick={createCommnetBtn}
            >
              게시
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default FeedFooterBox;
