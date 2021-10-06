import React, { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <h2>Pause On Hover</h2>
        <Slider {...settings}>
          <div>
            <img alt="/" src="https://chiase24.com/wp-content/uploads/2020/07/gai-xinh.jpg" />
          </div>
          <div>
          <img alt="/" src="https://chiase24.com/wp-content/uploads/2020/07/gai-xinh.jpg" />
          </div>
          <div>
          <img alt="/" src="https://chiase24.com/wp-content/uploads/2020/07/gai-xinh.jpg" />
          </div>
          <div>
          <img alt="/" src="https://chiase24.com/wp-content/uploads/2020/07/gai-xinh.jpg" />
          </div>
          <div>
          <img alt="/" src="https://chiase24.com/wp-content/uploads/2020/07/gai-xinh.jpg" />
          </div>
          <div>
          <img alt="/" src="https://chiase24.com/wp-content/uploads/2020/07/gai-xinh.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}