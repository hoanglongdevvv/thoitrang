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
            <img alt="/" src="https://anhdephd.com/wp-content/uploads/2019/07/hinh-gai-xinh-han-quoc-dep-de-thuong-8.jpg"/>
          </div>
          <div>
          <img alt="/" src="https://anhdephd.com/wp-content/uploads/2019/07/hinh-gai-xinh-han-quoc-dep-de-thuong-8.jpg" />
          </div>
          <div>
          <img alt="/" src="https://anhdephd.com/wp-content/uploads/2019/07/hinh-gai-xinh-han-quoc-dep-de-thuong-8.jpg" />
          </div>
          <div>
          <img alt="/" src="https://anhdephd.com/wp-content/uploads/2019/07/hinh-gai-xinh-han-quoc-dep-de-thuong-8.jpg" />
          </div>
          <div>
          <img alt="/" src="https://anhdephd.com/wp-content/uploads/2019/07/hinh-gai-xinh-han-quoc-dep-de-thuong-8.jpg" />
          </div>
          <div>
          <img alt="/" src="https://anhdephd.com/wp-content/uploads/2019/07/hinh-gai-xinh-han-quoc-dep-de-thuong-8.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}