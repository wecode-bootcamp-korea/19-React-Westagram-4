import React, { Component } from "react";
import "./Comment.scss"

class Comment extends Component {
  deleteCommentBtn = () => {
    this.props.deleteCommentBtn();
  };

  render() {
    const { commentList, deleteCommentBtn } = this.props;
    return (
      <div className="commentBox">
        {commentList.map((comment) => {
          return (
            <div key={comment.id}>
              <a>nickName</a>
              <span>{`${comment.value}`}</span>
              <i className="fas fa-heart likeIcon"></i>
              <button onClick={() => deleteCommentBtn(comment.id)}>X</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comment;
