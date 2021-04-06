import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./Comment.scss";

class Comment extends Component {
  deleteCommentBtn = () => {
    this.props.deleteCommentBtn();
  };

  chgLikeColor = () => {
    this.props.chgLikeColor();
  };

  render() {
    const { commentList, deleteCommentBtn, chgLikeColor } = this.props;
    return (
      <div className="commentWrapper">
        {commentList.map((comment) => {
          return (
            <div className="commentBox">
              <div key={comment.id}>
                <Link to="/mains">{`${comment.uesrName}`}</Link>
                <span>{`${comment.value}`}</span>
              </div>
              <i
                className={comment.isLiked ? "far fa-heart" : "fas fa-heart"}
                onClick={() => chgLikeColor(comment.id)}
              ></i>
              <button onClick={() => deleteCommentBtn(comment.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comment;
