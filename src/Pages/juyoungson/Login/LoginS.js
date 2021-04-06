import React, { Component } from "react";
import { withRouter,Link } from "react-router-dom";
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
    const testPw = "1234";

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
    this.setState(
      {
        [id]: value,
      },
      this.changeBtnColor
    );
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
  };

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
            <li>
              <Link to="#">소개</Link>
            </li>
            <li>
              <Link to="#">블로그</Link>
            </li>
            <li>
              <Link to="#">채용 정보</Link>
            </li>
            <li>
              <Link to="#">도움말</Link>
            </li>
            <li>
              <Link to="#">API</Link>
            </li>
            <li>
              <Link to="#">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="#">약관</Link>
            </li>
            <li>
              <Link to="#">인기 계정</Link>
            </li>
            <li>
              <Link to="#">해시태그</Link>
            </li>
            <li>
              <Link to="#">위치</Link>
            </li>
          </ul>
          <ul className="siteInfo">
            <li>
              <Link to="#">뷰티</Link>
            </li>
            <li>
              <Link to="#">댄스 및 공연</Link>
            </li>
            <li>
              <Link to="#">피트니스</Link>
            </li>
            <li>
              <Link to="#">식음료</Link>
            </li>
            <li>
              <Link to="#">집 및 정원</Link>
            </li>
            <li>
              <Link to="#">음악</Link>
            </li>
            <li>
              <Link to="#">시각 예술</Link>
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
