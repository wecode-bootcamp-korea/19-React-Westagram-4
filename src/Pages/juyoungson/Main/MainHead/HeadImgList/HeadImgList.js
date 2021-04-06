import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./HeadImgList.scss";

class HeadImgList extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/juyoungson/storyData.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        list : data,
      })
    })
  }

  render() {
    return this.state.list.map((list) => {
      return (
        <li key = {list.id}>
          <Link to="/mains">
            <div className="headImgBox">
              <img src={list.url} alt="스토리이미지" />
            </div>
            <span>{list.value}</span>
          </Link>
        </li>
      );
    });
  }
}

export default HeadImgList;
