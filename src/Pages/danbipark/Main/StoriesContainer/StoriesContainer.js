import React, { Component } from "react";

class StoriesContainer extends Component {
  render() {
    const { img, friendName } = this.props;

    return (
      <>
        <li className="stories-content">
          <div className="img-border">
            <img src={img} alt={friendName} />
            <span>{friendName}</span>
          </div>
        </li>
      </>
    );
  }
}

export default StoriesContainer;
