import React, { Component } from "react";
import MainNav from "./MainNav/MainNav";
import MainHead from "./MainHead/MainHead";
import FeedBox from "./FeedBox/FeedBox";
import MainRecommendBox from "./MainRecommendBox/MainRecommendBox";
import "./MainS.scss";

class MainS extends Component {

  render() {
    return (
      <>
        <MainNav />
        <main className="mainWrapper">
          <section className="mainBoxWrapper">
            <div className="mainBox">
              <MainHead />
              <FeedBox/>
            </div>
            <MainRecommendBox/>
          </section>
        </main>
      </>
    );
  }
}

export default MainS;
