import React, { Component } from 'react';
import CommentList from './CommentList/CommentList';
import COMMENT from './commentData';
// import './Comment.scss';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: ''
    };
  }

  componentDidMount() {
    this.setState({
      commentList: COMMENT
    });
  }

  handleCommentValue = e => {
    this.setState({
      commentValue: e.target.value
    });
  };

	addComment = e => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: 'wecode',
          content: commentValue,
          isLiked: false
        }
      ],
      commentValue: ''
    });
  };


render() {
    const { commentList, commentValue } = this.state;

    return (
      <div className="comment">
        <h1>Main Page</h1>
        <ul>
          {commentList.map(comment => {
            return (
              <CommentList
								key={comment.id}
                clickEvent={this.changeColor}
                name={comment.userName}
                comment={comment.content}
              />
            );
          })}
        </ul>
        <div className="commentInput">
          <form onSubmit={this.addComment}>
            <input
              onChange={this.handleCommentValue}
              type="text"
              placeholder="enter comment"
              value={commentValue}
            />
          </form>
          <button className="addCommentBtn" onClick={this.addComment}>
            Click
          </button>
        </div>
      </div>
    );
  }
}

export default Comment;