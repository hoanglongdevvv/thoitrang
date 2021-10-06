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
          <div className="details" >
                            <img src="https://anhdephd.com/wp-content/uploads/2019/07/hinh-gai-xinh-han-quoc-dep-de-thuong-8.jpg" alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>long</h2>
                                    <span>long</span>
                                </div>
                               
                                <p>long</p>
                                <p>long</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
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