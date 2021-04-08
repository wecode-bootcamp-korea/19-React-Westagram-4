import React from "react";
import { Link } from "react-router-dom";
import "./LoginH.scss";

class LoginH extends React.Component {
  constructor() {
  super()
    this.state = {
      idInputValue: "",
      pwInputValue: "",
      backColor: ""
    }
  }
  // handleIdInput = (event) => {
  //   this.setState({
  //     idInputValue: `${event.target.value}`,
  //   });
  // };

  // handlePwInput = (event) => {
  //   this.setState({
  //     pwInputValue: `${event.target.value}`,
  //   }); 
  // };
  
  handleInput = (e) => {
    const{ className } = e.target;
    const { value } =e.target;
    className === "email_password"
      ? this.setState({
        idInputValue: value,
      })
      :this.setState({
        pwInputValue: value,
      });
  }


  showValue =() => {
    this.props.history.push('/main')
  }

    goTomain = () => {
      // console.log("클릭")
      // this.props/history.push("/MainH");
        fetch("http://10.58.0.137:8000/users/signin", {
          method: "POST",
          // body: JSON.stringify({
          //   email: "jinah@ja.com",
          //   password: "12345678",
          // }),
          body: JSON.stringify({
            email: this.state.idInputValue,
            password: this.state.pwInputValue,
            // name: "luna",
            // phone_num: "01081405785"
          }),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if(data["MESSAGE"] === "SUCCESS") {
            alert("로그인 성공")
          } alert ("로그인에 일치하지 않습니다!")
          localStorage.setItem("token", data.Token);
        });  
    };


    
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
              onChange={this.handleIdInput}/>

              <input 
              type="text" 
              id="login_password" 
              placeholder="비밀번호"
              onChange={this.handlePwInput} />
            </div>
            <button
            onClick={this.goTomain}
            id="login_btn"
            // className={
            //   this.state.idInputValue.indexOf("@",".") !== -1 &&
            //   this.state.pwInputValue.length > 8
            //   ? "changeButtonColor"
            //   : "normalButtonColor"
            // }
            // disabled={
            //   this.state.idInputValue.indexOf("@",".") !== -1 &&
            //   this.state.pwInputValue.length > 8
            //     ? false
            //     : true
            // }
            >
              <Link to="/MainH" style={{color:'white'}}>로그인</Link>
              {/* 로그인 */}

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
