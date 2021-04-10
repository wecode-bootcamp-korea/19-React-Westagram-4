import React from "react";
import "./LoginP.scss";
import "../../../Styles/Common.scss";
import "../../../Styles/Reset.scss";

class Login extends React.Component {
  state = {
    loginId: "",
    loginPw: "",
    IsDisabled: true,
  };

  checkValidation = () => {
    const { loginId, loginPw } = this.state;
    fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({
        account: loginId,
        password: loginPw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem("access_token", res.access_token);
          alert("Westagram 환영합니다");
          this.props.history.push("/MainP");
        }
      });
  };

  handleValueInput = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value }, () => {
      this.checkLogin();
    });
  };

  checkLogin = () => {
    const { loginId, loginPw } = this.state;
    this.setState({
      IsDisabled: !(loginPw.length >= 5 && loginId.includes("@")),
    });
  };

  render() {
    const { loginId, loginPw, IsDisabled } = this.state;
    const { handleValueInput, checkValidation } = this;

    return (
      <div className="Login">
        <div className="main-container">
          <header>Westagram</header>
          <div className="input-container">
            <div className="id-container">
              <input
                type="text"
                id="loginId"
                value={loginId}
                onChange={handleValueInput}
              />
              <label for="loginId">전화번호,사용자 이름 또는 이메일</label>
            </div>
            <div className="password-container">
              <input
                type="password"
                id="loginPw"
                value={loginPw}
                onChange={handleValueInput}
              />
              <label for="loginPw">비밀번호</label>
            </div>
            <button
              className="login-button"
              disabled={IsDisabled}
              onClick={checkValidation}
            >
              로그인
            </button>
            <footer>비밀번호를 잊으셨나요?</footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
