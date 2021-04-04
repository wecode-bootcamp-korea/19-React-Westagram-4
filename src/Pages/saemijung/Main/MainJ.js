import React, { Component } from 'react';
import './MainJ.scss';
import imgH from "../Images/home.png";
import imgD from "../Images/dm.png";
import imgE from "../Images/explore.png";
import imgHeart from "../Images/heart.png";
import imgP from "../Images/profile.png";
import imgI from "../Images/instagram.png";

class MainJ extends Component {
  render() {
    return (
    <div className="Main_container">
      <nav className="top">
        <div className="nav">
          <div className="logo_box">
            <img className="insta_log" alt="인스타 이미지 로고"src={imgI} />
            <img className="insta_txt" alt="인스타 텍스트 로고" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
          </div>
          <div className="search">
            <div className="search_box">
              <i className="fas fa-search"></i>
                <input className="search_txt" placeholder="검색"></input>
            </div>
          </div>
          <div className="right_box">
              <img className="icons" src={imgH} alt="집"/>
              <img className="icons" src={imgD} alt="DM"/>
              <img className="icons" src={imgE} alt="나침반"/>
              <img className="icons" src={imgHeart} alt="하트"/>
              <img className="icons" src={imgP} alt="프로필 이미지"/>
          </div>
        </div>
      </nav>
      <section className="main">
        <div className="feeds">
          <div className="story">
            <ul className="story_ul">
              <li className="story_list">
                <img className="story_img"
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/66698862_2298901220238437_4607495745254195200_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=mIA_2h-8kWAAX-K752X&ccb=7-4&oh=f701fafede764767f3a8ba1162ed0e85&oe=60866A4A&_nc_sid=48a2a6"
                    alt="sheep님의 프로필 사진" />
                <span className="user_name">sheep_in</span>
              </li>
              <li className="story_list">
                <img className="story_img"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64886997_457854294768762_7513079337617195008_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Qao0nxSdhPEAX8PLxIM&ccb=7-4&oh=aeec2fa22e30dfd2b0a73ea07343ae86&oe=60851CC2&_nc_sid=48a2a6"
                  alt="펭수님의 프로필 사진" />
                  <span className="user_name">pengsu</span>
              </li>
              <li className="story_list">
                <img className="story_img"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/33630488_524196981310502_6101236489780199424_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=rbq3GJPKmmMAX9d27eE&ccb=7-4&oh=08c07d2933b6514fa507ca52389e3cf0&oe=6086B3D8&_nc_sid=5cbaad"
                  alt="정해인님의 프로필 사진" />
                  <span className="user_name">haein</span>
              </li>
              <li className="story_list">
                <img className="story_img"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/12934954_780303682101222_1743831253_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=coeQhPuFJv0AX8q4EnN&ccb=7-4&oh=d36cc7b877e918328da7e08bc79cca96&oe=60878220&_nc_sid=5cbaad"
                  alt="박보검님의 프로필 사진" />
                  <span className="user_name">bogum</span>
              </li>
              <li className="story_list">
                <img className="story_img"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/32943894_169375307081934_3791422272200245248_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ZoSLTtHfLAYAX9-NjIH&ccb=7-4&oh=42b54008d828ec7270d8d528c38ff498&oe=6086A373&_nc_sid=5cbaad"
                  alt="정유미님의 프로필 사진" />
                  <span className="user_name">yumi</span>
              </li>
              <li className="story_list">
                <img className="story_img"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/53696866_566236867218954_4436731191344758784_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=uRQ5drijTzMAX9glTct&ccb=7-4&oh=f30367a08ac7cd488e34f491e3e5437d&oe=6088EB1B&_nc_sid=48a2a6"
                  alt="이유진님의 프로필 사진" />
                  <span className="user_name">u_jin</span>
              </li>
              <li className="story_list">
                <img className="story_img"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/62098375_454261105141458_3297570444126715904_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Yq6FHsdrUMwAX9OGtKL&ccb=7-4&oh=f01c88429ea31140d28aabd5a853e988&oe=60860879&_nc_sid=48a2a6"
                  alt="채식한끼님의 프로필 사진" />
                  <span className="user_name">bagi</span>
              </li>
            </ul>
          </div>
          <article className="article">
            <div className="feed_top">
              <img className="feed_profile_img"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/44616351_1038813756325684_5818381853609951232_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=6aPWqqMmQZcAX8L4_kP&ccb=7-4&oh=4ab4ce79024affb2d2767e9b4a09ba78&oe=608566BA&_nc_sid=7bff83"
              alt="프로필이미지" />
              <span className="feed_profile_name">sammy jung</span>
            </div>
            <div className="feed_img_box">
              <img className="feed_img"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/95665924_2941705269209023_710084907836822173_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=q2aiNgDnagUAX-82r7R&ccb=7-4&oh=4c0c05c3879429a49f80d9babac98976&oe=6087C285&_nc_sid=4f375e"
              alt="카페 사진" />
            </div>
          </article>
                    <section className="section_left_box">
                        <div className="section_btn_left">
                            <button className="like"></button>
                            <button className="comment_add"></button>
                            <button className="share"></button>
                        </div>
                        <button className="bookmark"></button>
                    </section>
                    <section className="like_people">
                        <span className="like_text"></span>
                    </section>
                    <section className="comment">
                        <p className="comment_name">sammy</p>
                        <p className="comment_text">레몬 파운드 케이크 맛있겠다..</p>
                        <input className="comment_input" type="text" placeholder="댓글을 입력하세요" />
                        <button className="comment_btn">입력</button>
                    </section>
                </div>
                <div className="main_right">
                    <div className="profile_right">
                        <canvas className="profile_right_img">
            <img alt="나의 프로필이미지" />
                        </canvas>
                        <span className="profile_name"></span>
                    </div>
                </div>
            </section>
      </div>
    );
  }
}

export default MainJ;