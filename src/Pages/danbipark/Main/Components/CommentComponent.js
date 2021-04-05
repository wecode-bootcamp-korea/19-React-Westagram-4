import React, { Component } from "react";
import "./CommentComponent.scss";

class CommentComponent extends Component {
  render() {
    return (
      <>
        <li className="comment">
          <strong>itssweetrain </strong>
          {this.props.commentList}
        </li>
      </>
    );
  }
}

export default CommentComponent;
