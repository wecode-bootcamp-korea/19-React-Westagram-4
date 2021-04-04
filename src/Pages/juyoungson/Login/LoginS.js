import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
    };
  }

  checkInput = (e) => {
    e.preventDefault();
    const { inputId, inputPw } = this.state;
    const testId = "123@123";
    const testPw = "12345";

    if (inputId !== testId || inputPw !== testPw || !inputId || !inputPw) {
      alert("ID/PW를 확인해주세요");
      return;
    }

    if (inputId === testId && inputPw === testPw) {
      if (inputId.indexOf("@") === -1) {
        alert("e-mail형식으로 입력해주세요");
        return;
      }
      if (inputPw.length < 5) {
        alert("pw를 5글자 이상 입력해주세요");
        return;
      }
      alert("환영합니다.");
      this.props.history.push("/mains");
    }
  };

  inputValue = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    }, this.changeBtnColor);
  };

  changeBtnColor = () => {
    const { inputId, inputPw } = this.state;
    inputId.indexOf("@") !== -1 && inputPw.length >= 5
      ? this.setState({
        btnColor: "loginDisabled",
        })
      : this.setState({
        btnColor: "loginButton",
        });
  }

  render() {
    const { inputValue, checkInput } = this;
    const { inputId, inputPw, btnColor } = this.state;
    return (
      <section className="Login">
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
              <button
                onClick={checkInput}
                className={btnColor}
              >
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
              <a href="">비밀번호를 잊으셨나요?</a>
            </form>
          </div>
          <div className="signUp">
            <p>
              계정이 없으신가요?
              <a href="#">
                <span>가입하기</span>
              </a>
            </p>
          </div>
          <div className="download">
            <p>앱을 다운로드하세요</p>
            <div className="downloadImg">
              <a href="#">
                <img src={appstoreLogo} alt="" />
              </a>
              <a href="#">
                <img src={googleLogo} alt="" />
              </a>
            </div>
          </div>
        </main>

        <footer>
          <ul className="siteInfo">
            <li>
              <a href="#">소개</a>
            </li>
            <li>
              <a href="#">블로그</a>
            </li>
            <li>
              <a href="#">채용 정보</a>
            </li>
            <li>
              <a href="#">도움말</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">개인정보처리방침</a>
            </li>
            <li>
              <a href="#">약관</a>
            </li>
            <li>
              <a href="#">인기 계정</a>
            </li>
            <li>
              <a href="#">해시태그</a>
            </li>
            <li>
              <a href="#">위치</a>
            </li>
          </ul>
          <ul className="siteInfo">
            <li>
              <a href="#">뷰티</a>
            </li>
            <li>
              <a href="#">댄스 및 공연</a>
            </li>
            <li>
              <a href="#">피트니스</a>
            </li>
            <li>
              <a href="#">식음료</a>
            </li>
            <li>
              <a href="#">집 및 정원</a>
            </li>
            <li>
              <a href="#">음악</a>
            </li>
            <li>
              <a href="#">시각 예술</a>
            </li>
          </ul>
          <div className="selectLang">
            <div className="selectList">
              <select name="언어선택" id="">
                <option value="af">Afrikaans</option>
                <option value="cs">Čeština</option>
                <option value="da">Dansk</option>
                <option value="de">Deutsch</option>
                <option value="el">Ελληνικά</option>
                <option value="en">English</option>
                <option value="en-gb">English (UK)</option>
                <option value="es">Español (España)</option>
                <option value="es-la">Español</option>
                <option value="fi">Suomi</option>
                <option value="fr">Français</option>
                <option value="id">Bahasa Indonesia</option>
                <option value="ko">한국어</option>
                <option value="ja">日本語</option>
                <option value="it">Italiano</option>
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
