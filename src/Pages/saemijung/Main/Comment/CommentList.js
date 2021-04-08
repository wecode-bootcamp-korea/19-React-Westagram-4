import React, { Component } from "react";
import "./Comment.scss";

class CommentList extends Component {
  render() {
    // console.log(this.props);
    return (
      <li id={this.props.key} className="comment_list">
        <span className="comment_name">{this.props.name}</span>
        <span>{this.props.comment}</span>
      </li>
    );
  }
}

export default CommentList;
