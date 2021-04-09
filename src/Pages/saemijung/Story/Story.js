import React, { Component } from "react";
import "./Story.scss";
import { STORYLIST } from "./StoryData";

class Story extends Component {
  render() {
    return (
      <div className="story">
        <ul className="story_ul">
          {STORYLIST.map((storyList) => {
            return (
              <li className="story_list">
                <img
                  key={storyList.id}
                  className="story_img"
                  src={storyList.imgSrc}
                  alt={storyList.imgAlt}
                />
                <span className="user_name">sheep_in</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Story;
