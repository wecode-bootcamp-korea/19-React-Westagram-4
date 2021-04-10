import React, { Component } from "react";

class Recommendation extends Component {
  render() {
    const { img, name } = this.props;
    return (
      <>
        <li className="friends-info">
          <img src={img} alt={name} />
          <div className="friends-info-spec">
            <span>
              <strong>{name}</strong>
            </span>
            <span className="add-info">회원님을 팔로우합니다</span>
          </div>
          <span>팔로우</span>
        </li>
      </>
    );
  }
}

export default Recommendation;
