import React, { Component } from "react";
import "../Comment/Comment.scss";

class Comments extends Component {
  render() {
    // console.log("props content:" + this.props.content);
    // console.log("props id:" + this.props.id);
    return (
      <li key={this.props.id} className="comment_list">
        <span className="comment_name">{this.props.userId}</span>
        {this.props.content}
      </li>
    );
  }
}

export default Comments;
