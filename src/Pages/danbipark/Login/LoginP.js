import React from "react";
import "./LoginP.scss";
import "../../../Styles/Common.scss";
import "../../../Styles/Reset.scss";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <div className="main-container">
          <header>Westagram</header>
          <div className="input-container">
            <div className="id-container">
              <input type="text" id="id-input" />
              <label for="id-input">전화번호,사용자 이름 또는 이메일</label>
            </div>
            <div className="password-container">
              <input type="password" id="password-input" />
              <label for="password-input">비밀번호</label>
            </div>
            <button className="login-button">
              <Link to="/MainP" className="goToMain">
                로그인
              </Link>
            </button>
            <footer>비밀번호를 잊으셨나요?</footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
