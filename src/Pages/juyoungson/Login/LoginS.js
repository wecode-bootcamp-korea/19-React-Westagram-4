import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./LoginS.scss";

import facebook from "../../../Images/juyoungson/facebook.png";
import googleLogo from "../../../Images/juyoungson/google.png";
import appstoreLogo from "../../../Images/juyoungson/appstore.png";

class LoginS extends Component {
  constructor() {
    super();
    this.state = {
      inputId: "",
      inputPw: "",
      btnColor: "loginButton",
      languageList: [],
      siteInfoList: [],
    };
  }

  checkInput = (e) => {
    e.preventDefault();
    const { inputId, inputPw } = this.state;
    fetch("http://10.58.5.21:8000/users/sign_in", {
      method: "POST",
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.MESSAGE === "INVALID EMAIL") {
          alert("e-mail형식으로 입력해주세요");
        }

        if (data.MESSAGE === "INVALID PASSWORD") {
          alert("pw를 5글자 이상 입력해주세요");
        }

        if (data.MESSAGE === "SUCCESS") {
          alert("환영합니다.");
          this.props.history.push("/mains");
        }
      });
  };

  inputValue = (e) => {
    const { id, value } = e.target;
    this.setState(
      {
        [id]: value,
      },
      this.changeBtnColor
    );
  };

  changeBtnColor = () => {
    const { inputId, inputPw } = this.state;
    inputId.includes("@") && inputPw.length >= 5
      ? this.setState({
          btnColor: "loginDisabled",
        })
      : this.setState({
          btnColor: "loginButton",
        });
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/juyoungson/languageListData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          languageList: data,
        });
      });

    fetch("http://localhost:3000/data/juyoungson/siteInfoData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          siteInfoList: data,
        });
      });
  }

  render() {
    const { inputValue, checkInput } = this;
    const {
      inputId,
      inputPw,
      btnColor,
      languageList,
      siteInfoList,
    } = this.state;
    return (
      <section className="login">
        <main className="loginMain">
          <div className="loginMainContent">
            <h1>westagram</h1>
            <form className="loginForm" action="">
              <input
                id="inputId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={inputId}
                onChange={inputValue}
              />
              <input
                id="inputPw"
                type="password"
                placeholder="비밀번호"
                value={inputPw}
                onChange={inputValue}
              />
              <button onClick={checkInput} className={btnColor}>
                로그인
              </button>
              <div className="loginLineWrapper">
                <div className="loginLine"></div>
                <div className="loginLineContent">또는</div>
                <div className="loginLine"></div>
              </div>
              <button className="facebookButton">
                <img src={facebook} alt="" />
                <span>Facebook으로 로그인</span>
              </button>
              <Link to="">비밀번호를 잊으셨나요?</Link>
            </form>
          </div>
          <div className="signUp">
            <p>
              계정이 없으신가요?
              <Link to="#">
                <span>가입하기</span>
              </Link>
            </p>
          </div>
          <div className="download">
            <p>앱을 다운로드하세요</p>
            <div className="downloadImg">
              <Link to="#">
                <img src={appstoreLogo} alt="" />
              </Link>
              <Link to="#">
                <img src={googleLogo} alt="" />
              </Link>
            </div>
          </div>
        </main>

        <footer>
          <ul className="siteInfo">
            {siteInfoList.map((siteInfo) => {
              const { id, url, title } = siteInfo;
              return (
                <li key={id}>
                  <Link to={url}>{title}</Link>
                </li>
              );
            })}
          </ul>

          <div className="selectLang">
            <div className="selectList">
              <select name="언어선택" id="">
                {languageList.map((lang) => {
                  const { country, language, id } = lang;
                  return <option key={id} value={country}>{language}</option>;
                })}
              </select>
            </div>

            <span>© 2021 Instagram from Facebook</span>
          </div>
        </footer>
      </section>
    );
  }
}

export default withRouter(LoginS);
