import React from "react";
import { Link } from "react-router-dom";
import "./LoginH.scss";

class LoginH extends React.Component {
  constructor() {
  super()
    this.state = {
      id: "",
      pw: "",
      backColor: ""
    }
  }
  consoleID = (event) => {
    this.setState({
      id: event.target.value
    })
  }

  consolePW = (event) => {
    this.setState({
      pw: event.target.value
    })
  }

  showValue =() => {
    this.props.history.push('/main')
  }
  render() {
    return (
      <section>
        <div className="login_body">
          <div className="center">
            <p className="login_titleName">westagram</p>
            <div className="login_input">
              <input
                type="text"
                id="email_password"
                placeholder="전화번호,사용자 이름 또는 이메일"
                onChange={this.consoleID}/>
              <input type="text" id="login_password" placeholder="비밀번호"
              onChange={this.consolePW} />
            </div>
            <button className="login_btn" disabled>
              <Link to="/MainH">로그인</Link>
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
