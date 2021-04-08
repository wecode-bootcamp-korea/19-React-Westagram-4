import React from "react";
import { Link } from "react-router-dom";
import "./LoginH.scss";

class Ex extends React.Component {
    constructor() {
    super()
      this.state = {
          username: "",
          email: "",
          password: "",
          phoneNumber: "",
          checkValidation: false,
      };
    }
   
    InputChange = e => {
        const { name, value } = e.target;
        this.setState(
            {
                [name]: value,
            },
            () => {
                const {username, email, phoneNumber, password } = this.state;
                this.setState({
                    checkValidation:
                    username.name.length >= 5 &&
                    emailReg.test(email) &&
                    phoneNumberReg.test(phoneNumber) &&
                    password.length >= 8,
                });
            }
        );
    };
  
    signUpClick = e => {
        const {
            username,
            email,
            phoneNumber,
            password,
            checkValidation,
        } = this.state;
        const { signUpUserInfo } = this.props;
        return checkValidation
        ? signUpUserInfo(username, email, phoneNumber, password)
        : e.preventDefault();
    };  


    render() {
        const {
            username,
            email,
            phoneNumber,
            password,
            checkValidation,
        } = this.state;
        const { formChange } = this.props;
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
                value={username}
                onChange={this.InputChange}
                />
  
                <input 
                type="text" 
                id="login_password" 
                placeholder="비밀번호"
                 />
              </div>
              <button id="login_btn">로그인</button>
  
              <div className="rePassword_btn">
                <h3>비밀번호를 잊으셨나요?</h3>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
  
  export default Ex;
  