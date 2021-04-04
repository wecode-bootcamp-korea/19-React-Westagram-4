import React, { Component } from "react";
import "./HeadImgList.scss";

class HeadImgList extends Component {
  state = {
    list: [
      { id: "1", value: "sonju" ,url: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/135279826_849129995941735_5089336345568035198_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=V3kGcFzdIAcAX-uhz2t&edm=ALlQn9MAAAAA&ccb=7-4&oh=3a801c2eadaa689021049d9e141a9ffb&oe=608E1177&_nc_sid=48a2a6"},
      { id: "2", value: "jisu", url:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/123655227_2427320324237564_6634624579208785807_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0EoXOEn8AoQAX8l_uR6&edm=ALlQn9MAAAAA&ccb=7-4&oh=cf5809a1c20e1ed99d00d910d2edbce0&oe=608E9AD1&_nc_sid=48a2a6"},
      { id: "3", value: "chihun", url:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/17932359_282131342226593_7673766347767021568_a.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=AaZ6-ZPz20EAX-9xG38&edm=ALlQn9MAAAAA&ccb=7-4&oh=8a644f156a25296bac7af7d525e007e4&oe=608D78D9&_nc_sid=48a2a6"},
      { id: "4", value: "uuyoen", url:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/151050682_175951717365902_1995456229060968823_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=7hdy0J-cOTwAX-aUlJO&edm=ALlQn9MAAAAA&ccb=7-4&oh=52d9b70726aa7dd14d906fd03fbb4df9&oe=608FB8B0&_nc_sid=48a2a6"},
      { id: "5", value: "jiwoung", url:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/91962261_666096280894572_8799167621791481856_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=JqEMkLElGlUAX_VixUc&edm=ALlQn9MAAAAA&ccb=7-4&oh=2af15080e92391e7c90a5671d50f1f84&oe=608E8F6B&_nc_sid=48a2a6"},
      { id: "6", value: "ziziziq", url:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/47694624_500843603657464_9015430246031163392_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=LQGSSlmFeOAAX-TAxUn&edm=AIQHJ4wAAAAA&ccb=7-4&oh=ea186be9415ea3e4287bbffe5e814aa0&oe=608E9930&_nc_sid=7b02f1"},
      { id: "7", value: "zzzha", url:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/149474827_230468952064053_2052432045052715764_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wzDgp_WINUoAX9IKS2Y&edm=ABfd0MgAAAAA&ccb=7-4&oh=0b2fb7722b861f6671987bc15b646d85&oe=6090B950&_nc_sid=7bff83"},
      { id: "8", value: "addii", url:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/s150x150/127130348_299876691210108_1742708464240865406_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IWZQgeU5gLQAX8xSRkB&edm=AGW0Xe4AAAAA&ccb=7-4&oh=0965b025d3ff7ed1ac26bf745678e2a4&oe=608FB75F&_nc_sid=acd11b"},
      { id: "9", value: "guri", url:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/s150x150/121494870_184180073236034_8262821947112537946_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=bEYo0q3nPa8AX8H5PYR&edm=AGW0Xe4AAAAA&ccb=7-4&oh=1fa71f17103291167cd68724823ed861&oe=608F0C58&_nc_sid=acd11b"},
      { id: "10", value: "ziyoung", url:"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.178.1440.1440a/s640x640/152754820_1306618116361085_6308982920363527811_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=NbJtE3DpaSAAX-jYLUo&edm=APU89FAAAAAA&ccb=7-4&oh=1f26723ad77d85b157b03b33692a59e7&oe=608F07A4&_nc_sid=86f79a"},
   
    ],
  };
  render() {
    return this.state.list.map((list) => {
      return (
        <li key = {list.id}>
          <a href="">
            <div className="headImgBox">
              <img src={list.url} alt="" />
            </div>
            <span>{list.value}</span>
          </a>
        </li>
      );
    });
  }
}

export default HeadImgList;
