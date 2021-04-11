import React from "react";
import "./LoginH.scss";

class LoginH extends React.Component {
  constructor() {
    super();
    this.state = {
      idInputValue: "",
      pwInputValue: "",
      isBtnAble: false,
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goTomain = () => {
    // this.props.history.push("/MainH");
    fetch("http://10.58.0.137:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.idInputValue,
        password: this.state.pwInputValue,
        phone_number: "01027222754",
        name: "jinahHong",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data["MESSAGE"] === "SUCCESS") {
          alert("로그인 성공");
        }
        alert("로그인에 일치하지 않습니다!");
        localStorage.setItem("token", data.Token);
      });
  };

  render() {
    const { idInputValue, pwInputValue } = this.state;
    return (
      <section>
        <div className="login_body">
          <div className="center">
            <p className="login_titleName">westagram</p>
            <div className="login_input">
              <input
                type="text"
                id="email_password"
                name="idInputValue"
                placeholder="전화번호,사용자 이름 또는 이메일"
                onChange={this.handleInput}
              />

              <input
                type="text"
                id="login_password"
                name="pwInputValue"
                placeholder="비밀번호"
                onChange={this.handleInput}
              />
            </div>

            <button
              id="login_btn"
              className={`${
                idInputValue.indexOf("@") && pwInputValue.length >= 5
                  ? "buttonOn"
                  : "buttonOff"
              }`}
              onClick={this.goToMain}
            >
              <div style={{ color: "white" }}>로그인</div>
            </button>
            <div className="rePassword_btn">
              <h3>비밀번호를 잊으셨나요?</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginH;
