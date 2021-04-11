import React, { Component } from "react";
import { SliderList } from "./SliderList";

class Slider extends Component {
  render() {
    return (
      <article>
        <ul className="main_slider">
          {SliderList.map((list) => {
            return (
              <li key={list.id}>
                <img src={list.content}></img>
              </li>
            );
          })}
        </ul>
      </article>
    );
  }
}

export default Slider;
