import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import "./LoginJ.scss";

class LoginJ extends Component {
  goTomain = () =>{ 
    this.props.history.push('/MainJ');
    }

  render() {
    return (
      <div className="Login_container">
        <div className="login_box">
        <div className="logo">
            <h1>westagram</h1>
        </div>
        <section className="login_form">
            <input className="login_id" type="text" placeholder="전화번호,사용자 이름 또는 이메일" />
            <input className="login_pw" type="text" placeholder="비밀번호" />
            {/* <Link to ="/main"> */}
            <button type ="button" className="login_btn" onClick={this.goTomain}>로그인</button>
            {/* </Link> */}
            <div className="forget_pw">
                <a className="forget_link" target="_blank" href="noreferrer" >비밀번호를 잊으셨나요?</a>
            </div>
        </section>
    </div>.
      </div>
    );
  }
}

export default LoginJ;