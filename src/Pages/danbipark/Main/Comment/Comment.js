import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    const { key, name, comment } = this.props;

    return (
      <>
        <li className="comment">
          {key}
          <strong>{name}</strong>
          &nbsp;{comment}
        </li>
      </>
    );
  }
}

export default Comment;
