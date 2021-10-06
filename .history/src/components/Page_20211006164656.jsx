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
        <h2>M</h2>
        <Slider {...settings}>
          <div>
            <img alt="/" src="https://product.hstatic.net/1000147171/product/4_1f4fbc72ee3247bfbd8616d93859ed4b_large.png" />
          </div>
          <div>
          <img alt="/" src="https://product.hstatic.net/1000147171/product/4_1f4fbc72ee3247bfbd8616d93859ed4b_large.png" />
          </div>
          <div>
          <img alt="/" src="https://product.hstatic.net/1000147171/product/4_1f4fbc72ee3247bfbd8616d93859ed4b_large.png" />
          </div>
          <div>
          <img alt="/" src="https://product.hstatic.net/1000147171/product/4_1f4fbc72ee3247bfbd8616d93859ed4b_large.png" />
          </div>
          <div>
          <img alt="/" src="https://product.hstatic.net/1000147171/product/4_1f4fbc72ee3247bfbd8616d93859ed4b_large.png" />
          </div>
          <div>
          <img alt="/" src="https://product.hstatic.net/1000147171/product/4_1f4fbc72ee3247bfbd8616d93859ed4b_large.png" />
          </div>
        </Slider>
      </div>
    );
  }
}