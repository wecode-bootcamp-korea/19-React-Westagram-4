import React, { Component } from "react";

class CommentList extends Component {
  render() {
    return (
      <li id={this.props.key} className="comment_list">
        <span className="comment_name">{this.props.name}</span>
        {this.props.comment}
      </li>
    );
  }
}

export default CommentList;
