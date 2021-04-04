import React from "react";
import "./LoginP.scss";
import "../../../Styles/Common.scss";
import "../../../Styles/Reset.scss";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    loginId: "",
    loginPw: "",
    IsDisabled: true,
  };

  handleValueInput = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value }, () => {
      this.checkLogin();
    });
  };

  checkLogin = () => {
    this.setState({
      IsDisabled:
        this.state.loginPw.length >= 5 && this.state.loginId.includes("@")
          ? false
          : true,
    });
  };

  render() {
    return (
      <div className="Login">
        <div className="main-container">
          <header>Westagram</header>
          <div className="input-container">
            <div className="id-container">
              <input
                type="text"
                id="loginId"
                value={this.state.loginId}
                onChange={this.handleValueInput}
              />
              <label for="loginId">전화번호,사용자 이름 또는 이메일</label>
            </div>
            <div className="password-container">
              <input
                type="password"
                id="loginPw"
                value={this.state.loginPw}
                onChange={this.handleValueInput}
              />
              <label for="loginPw">비밀번호</label>
            </div>
            <button className="login-button" disabled={this.state.IsDisabled}>
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
