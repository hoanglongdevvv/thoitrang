import React, { Component } from "react";
import Slider from "react-slick";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "1px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div>
          <img  alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8th21s009-cb252-3-thumb-.jpg" width={200}/>
          </div>
          <div>
          <img  alt="..." src="https://media.canifa.com/catalog/product/8/t/8te19w043-sw100-33.jpg" width={200}/>
          </div>
          <div>
          <img  alt="..." src="hhttps://media.canifa.com/catalog/product/cache_generated/500x/8te19w002-pa093-51_thumb1_.jpg" width={200}/>
          </div>
          <div>
          <img  alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8te19w005-sy063thumb1.jpg" width={200}/>
          </div>
          <div>
          <img  alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8te19w005-sy063thumb1.jpg" width={200}/>
          </div>
          <div>
          <img  alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8te19w005-sy063thumb1.jpg" width={200}/>
          </div>
          <div>
          <img  alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8te19w005-sy063thumb1.jpg" width={200}/>
          </div>
          <div>
          <img  alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8te19w005-sy063thumb1.jpg" width={200}/>
          </div>
        </Slider>
      </div>
    );
  }
}