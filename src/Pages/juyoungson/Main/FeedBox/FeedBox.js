import React, { Component } from "react";
import FeedHeader from "./FeedHeader/FeedHeader";
import FeedImgBox from "./FeedImgBox/FeedImgBox";
import FeedIconBox from "./FeedIconBox/FeedIconBox";
import FeedFooterBox from "./FeedFooterBox/FeedFooterBox";
import "./FeedBox.scss";

class FeedBox extends Component {
  state = {
    feedBoxList : []
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/juyoungson/feedData.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        feedBoxList : data,
      })
    })
  }

  render() {
    const { feedBoxList } = this.state;
    return (
      feedBoxList.map((feed) => {
        return (
        <article className="feedBox" key={feed.id}>
          <FeedHeader feedAccount = {feed.account}/>
          <FeedImgBox feedImg = {feed.img}/>
          <FeedIconBox />
          <FeedFooterBox />
        </article>)
      })
    );
  }
}

export default FeedBox;
