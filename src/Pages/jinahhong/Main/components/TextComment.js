import React from "react";

class TextComment extends React.Component {
  textChange = (e) => {
    this.setState({
      newReply: e.target.value,
    });
  };

  render() {
    const { textChange, pressEnter, newComment } = this;
    return (
      <>
        <div className="feeds_info_comment">
          <div className="textbox">
            {this.props.commentList.map((el) => (
              <li>{el.text}</li>
            ))}
          </div>
          <div className="comment_border_line">
            <button className="feed_info_comment_emoji">
              <i className="far fa-smile fa-2x" />
            </button>
            <input
              id="feed_info_comment_input"
              type="text"
              placeholder="댓글달기..."
              onChange={textChange}
              onKeyPress={pressEnter}
              value={newComment}
            />
            <button button id="feed_info_comment_submit" onClick={this.add}>
              게시
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default TextComment;
