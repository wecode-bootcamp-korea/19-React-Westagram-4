import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import "./LoginJ.scss";

class LoginJ extends Component {
  constructor(){
    super();
    this.state ={
      idInputData : "",
      pwInputData : "",
      btnColorState: false,
    }
  }

    goTomain = () =>{ 
    this.props.history.push('/MainJ');
    }

    handleIdInput = (event)=>{
    // console.log(event.target.value);
    this.setState({
      idInputData :event.target.value,
    })
    }

    handlePwInput = (event)=>{
    // console.log(event.target.value);
    this.setState({
      pwInputData :event.target.value,
    })
  }
    btnChangeColor = ()=> {
    (this.state.idInputData.includes("@") && this.state.pwInputData.length>=5)?
      this.setState({btnColorState : true,}):this.setState({btnColorState : false,})
  }

  render() {
    // console.log(this.state.);
    console.log("btnColorState:"+this.state.btnColorState);
    return (
      <div className="Login_container">
        <div className="login_box">
          <div className="logo">
            <h1>westagram</h1>
          </div>
          <section className="login_form">
            <input className="login_id" onChange={this.handleIdInput} onKeyUp={this.btnChangeColor} type="text" placeholder="전화번호,사용자 이름 또는 이메일" />
            <input className="login_pw" onChange={this.handlePwInput} onKeyUp={this.btnChangeColor} type="text" placeholder="비밀번호" />
            {/* <Link to ="/main"> */}
            <button className={"login_btn " + (this.state.btnColorState? 'onColor':'offColor')} type ="button" onClick={this.goTomain}>로그인</button>
            {/* </Link> */}
            <div className="forget_pw">
                <a className="forget_link" target="_blank" href="noreferrer" >비밀번호를 잊으셨나요?</a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default LoginJ;