import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import "./LoginJ.scss";

class LoginJ extends Component {
  constructor() {
    super();
    this.state = {
      idInputData: "",
      pwInputData: "",
      btnColorState: false,
    };
  }

  handleInput = (e) => {
    const { className, value } = e.target;

    this.setState({
      [className]: value,
    });
  };

  goTomain = () => {
    fetch("http://10.58.3.99:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.idInputData,
        password: this.state.pwInputData,
        // phonenumber: "01011112222",
        // username: "펭수",
        // name: "김펭수",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("결과 :", data);
        if (data["MESSAGE"] === "SUCESS") {
          alert("로그인 성공!");
          this.props.history.push("/MainJ");
          localStorage.setItem("token", data.access_token);
        } else {
          alert("로그인에 일치하지 않습니다!");
        }
      });
    // .then((result) => console.log("결과 :", result));
  };

  btnChangeColor = () => {
    this.state.idInputData.includes("@") && this.state.pwInputData.length >= 5
      ? this.setState({ btnColorState: true })
      : this.setState({ btnColorState: false });
  };

  render() {
    return (
      <div className="loginContainer">
        <div className="login_box">
          <div className="logo">
            <h1>westagram</h1>
          </div>
          <section className="login_form">
            <input
              className="idInputData"
              onChange={this.handleInput}
              onKeyUp={this.btnChangeColor}
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
            <input
              className="pwInputData"
              onChange={this.handleInput}
              onKeyUp={this.btnChangeColor}
              type="text"
              placeholder="비밀번호"
            />{" "}
            {/* <Link to ="/main"> */}
            <button
              className={
                "login_btn " +
                (this.state.btnColorState ? "onColor" : "offColor")
              }
              type="button"
              onClick={this.goTomain}
            >
              로그인
            </button>
            {/* </Link> */}
            <div className="forget_pw">
              <a className="forget_link" target="_blank" href="noreferrer">
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default LoginJ;
