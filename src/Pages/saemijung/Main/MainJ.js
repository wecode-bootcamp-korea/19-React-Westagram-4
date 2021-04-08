import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Story from "../Story/Story";
import Feed from "./Feed";
// import Comments from "./Comment/Comments";
// import CommentList from "./Comment/CommentList";

import "./MainJ.scss";
// import COMMENT from "./Comment/commentData";

class MainJ extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      userImgUrl: "",
      userName: "",
      conetentImg: "",
      content: "",
      FeedList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/FeedData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          FeedList: data,
        });
      });
  }

  addFeed = () => {
    const {
      FeedList,
      id,
      userImgUrl,
      userName,
      conetentImg,
      content,
    } = this.state;

    this.setState({
      FeedList: FeedList.concat({
        id: id,
        userImgUrl: userImgUrl,
        userName: userName,
        conetentImg: conetentImg,
        content: content,
      }),
    });
  };

  render() {
    return (
      <div className="Main_container">
        <Nav />
        <section className="main">
          <Story />
          <ul>
            {this.state.FeedList.map((element) => {
              console.log("state:" + this.state);
              return (
                <Feed
                  key={element.id}
                  userImgUrl={element.userImgUrl}
                  userName={element.userName}
                  conetentImg={element.conetentImg}
                  content={element.content}
                />
              );
            })}
          </ul>
          <div className="main_right">
            <div className="profile_right">
              <canvas className="profile_right_img">
                <img alt="나의 프로필이미지" />
              </canvas>
              <span className="profile_name"></span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MainJ;
