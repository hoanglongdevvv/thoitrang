import React, { Component } from "react";
import Slider from "react-slick";
 function Page() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
     return(
        <div>
                <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg" />
          </div>
          <div>
          <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg" />
          </div>
          <div>
          <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg" />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
     )
     
 }
 export default Page

      