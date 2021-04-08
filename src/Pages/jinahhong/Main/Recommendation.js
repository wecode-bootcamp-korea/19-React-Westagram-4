import React, { Component } from 'react';
import { RecommendationList } from "./RecommendationList";

class Recommendation extends Component {
    render() {
      return (
          <ul className="main_right_recommendation_list">
            {RecommendationList.map(el => {
              return (
                <li key={el.id}>
                <img src={el.content}></img>
                <div className="main_right_recommendation_name">
                <span className="bold_Name">{el.userName}</span>
                <span>{el.follow}</span>
                </div>
                <button>팔로우</button>
                </li>
              );
            })}
            </ul>
    );
  }
}

export default Recommendation;