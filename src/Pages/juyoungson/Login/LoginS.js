import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './LoginS.scss';

import facebook from '../../../Images/juyoungson/facebook.png';

class LoginS extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      bgColor: "",
    };
  }

  checkInput = (e) => {
    e.preventDefault();
    const id = this.state.id;
    const pw = this.state.pw;
    const testId = "123@123";
    const testPw = "12345";

    if (id !== testId || pw !== testPw || !id || !pw) {
      alert("ID/PW를 확인해주세요");
      return;
    }

    if (id === testId && pw === testPw) {
      if (id.indexOf("@") === -1) {
        alert("e-mail형식으로 입력해주세요");
        return;
      }
      if (pw.length < 5) {
        alert("pw를 5글자 이상 입력해주세요");
        return;
      }
      alert("환영합니다.");
      this.props.history.push("/main");
    }
  };

  inputId = (e) => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      id: value,
    });
    value.indexOf("@") !== -1 && this.state.pw.length >= 5
      ? this.setState({
          bgColor: "#34abeb",
        })
      : this.setState({
          bgColor: "#b2dffc",
        });
  };

  inputPw = (e) => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      pw: value,
    });

    this.state.id.indexOf("@") !== -1 && value.length >= 5
      ? this.setState({
         bgColor: "#34abeb",
         })
      : this.setState({
         bgColor: "#b2dffc",
         });
  };

  render() {
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
                value={this.state.id}
                onChange={this.inputId}
              />
              <input
                id="inputPw"
                type="password"
                placeholder="비밀번호"
                value={this.state.pw}
                onChange={this.inputPw}
              />
              <button
                className="loginButton"
                onClick={this.checkInput}
                style={{ backgroundColor: this.state.bgColor }}
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
                <img src="../images/appstore.png" alt="" />
              </a>
              <a href="#">
                <img src="images/google.png" alt="" />
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
