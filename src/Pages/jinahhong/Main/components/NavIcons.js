import React, { Component } from "react";
import { NavIconsList } from "./NavIconsList";

class NavIcons extends Component {
  render() {
    return (
      <div className="nav_icons">
        {NavIconsList.map((el) => {
          return (
            <button key={el.id}>
              <img src={el.content}></img>
            </button>
          );
        })}
      </div>
    );
  }
}

export default NavIcons;
