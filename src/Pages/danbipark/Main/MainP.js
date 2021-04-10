import React from "react";
import Feed from "./Feed/Feed";
import StoriesContainer from "./StoriesContainer/StoriesContainer";
import Recommendation from "./Recommendation/Recommendation";
import itssweetrain from "../../../Images/danbipark/itssweetrain.jpg";
import "./MainP.scss";
import "../../../Styles/Common.scss";
import "../../../Styles/Reset.scss";

class Main extends React.Component {
  state = {
    feedLists: [],
    StoriesLists: [],
    FriendsLists: [],
  };

  componentDidMount() {
    fetch("/data/FeedData.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feedLists: data,
        });
      });

    fetch("/data/StoriesData.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          StoriesLists: data,
        });
      });

    fetch("/data/Recommendation.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          FriendsLists: data,
        });
      });
  }

  render() {
    const { feedLists, StoriesLists, FriendsLists } = this.state;

    return (
      <>
        <nav className="nav-bar container">
          <div className="nav-bar">
            <div className="insta-logo container">
              <i className="fab fa-instagram"></i>
              <span className="insta-text">Westagram</span>
            </div>
            <div className="search container">
              <input type="text" className="search-bar" />
              <i className="fas fa-search"></i>
              <span className="search-text">검색</span>
            </div>
            <div className="img container">
              <i className="far fa-compass"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-user"></i>
            </div>
          </div>
        </nav>
        <div className="all-container">
          <div className="main-left-container">
            <header className="stories-container">
              <ul>
                {StoriesLists.map((story) => {
                  return (
                    <StoriesContainer
                      key={story.id}
                      img={story.img}
                      friendName={story.friendName}
                    />
                  );
                })}
                ;
              </ul>
            </header>

            {feedLists.map((feed) => {
              return (
                <Feed
                  key={feed.id}
                  avatarImg={feed.avatarImg}
                  userName={feed.userName}
                  img={feed.img}
                  content={feed.content}
                  hashtag={feed.hashtag}
                  friendsName={feed.friendsName}
                  friendsComment={feed.friendsComment}
                />
              );
            })}
          </div>

          <div className="main-right-container">
            <aside className="aside-container">
              <div className="my-info">
                <img src={itssweetrain} alt="itssweetrain" />
                <div className="my-info-spec">
                  <span>
                    <strong>itssweetrain</strong>
                  </span>
                  <span>Danbi</span>
                </div>
              </div>

              <div className="friends-list">
                <div>
                  <strong>회원님을 위한 추천</strong>
                </div>
                <ul>
                  {FriendsLists.map((friend) => {
                    return (
                      <Recommendation
                        key={friend.id}
                        img={friend.img}
                        name={friend.name}
                      />
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
