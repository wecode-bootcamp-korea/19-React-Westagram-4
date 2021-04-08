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
          const { id, userName, value, isLiked } = comment;
          console.log(comment)
          return (

            <div className="commentBox" key={id}>
              <div >
                <Link to="/mains">{userName}</Link>
                <span>{value}</span>
              </div>
              <i
                className={isLiked ? "far fa-heart" : "fas fa-heart"}
                onClick={() => chgLikeColor(id)}
              ></i>
              <button onClick={() => deleteCommentBtn(id)}>
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
