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
  ccc = () => {
    fetch("http://10.58.0.137:8000/posting/post", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        images:
          "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/169687956_148425070449574_2460819262592409636_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=fUuQR-id9SAAX_BX9o-&edm=AIQHJ4wAAAAA&ccb=7-4&oh=f17c3dc7b34b737a865f9356ce64e893&oe=6095DD01&_nc_sid=7b02f1",
        content: "하.....저만 못하는 거 아니잖아요!!!백엔드가 문제네!",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // this.setState({
        //   FeedList: data,
        // });
      });
  };
  // componentDidMount() {
  //   fetch("http://10.58.0.137:8000/posting/post", {
  //     method: "GET",
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.result);

  //       this.setState({
  //         FeedList: data.result,
  //       });
  //     });
  // }

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
          {/* <button onClick={this.ccc}>ccc</button> */}
          <Story />
          <ul className="feed_list">
            {this.state.FeedList.map((element) => {
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
