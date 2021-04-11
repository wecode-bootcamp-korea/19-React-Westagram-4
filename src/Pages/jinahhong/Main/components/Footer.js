import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FooterList } from "./FooterList";

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className="main_right_footer">
          {FooterList.map((list) => {
            return (
              <li key={list.id} className="footer-list">
                <Link>{list.title}</Link>
              </li>
            );
          })}
        </ul>
        <p>© 2021 WESTAGRAM FROM SEUNGOK</p>
      </footer>
    );
  }
}

export default Footer;
