import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      width:"2000",
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <img alt="/" src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" height={400}/>
          </div>
          <div>
            <img alt="/" src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" height={400}/>
          </div>
          <div>
            <img alt="/" src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" height={400}/>
          </div>
          <div>
            <img alt="/" src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" height={400}/>
          </div>
          <div>
            <img alt="/" src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" height={400}/>
          </div>
          <div>
            <img alt="/" src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" height={400}/>
          </div>
          <div>
            <img alt="/" src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" />
          </div>
          <div>
            <img alt="/" src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}