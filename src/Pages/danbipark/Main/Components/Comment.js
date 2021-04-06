import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    return (
      <>
        <li className="comment">
          {this.props.key}
          <strong>{this.props.name}</strong>
          &nbsp;{this.props.comment}
        </li>
      </>
    );
  }
}

export default Comment;
