import React, { Component } from "react";
import Slider from "react-slick";

export default class Resizable extends Component {
  state = {
    display: true,
    width: 1200
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Resizable Collapsible </h2>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width + 100
            })
          }
        >
          {" "}
          increase{" "}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width - 160
            })
          }
        >
          {" "}
          decrease{" "}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              display: !this.state.display
            })
          }
        >
          {" "}
          toggle{" "}
        </button>
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none"
          }}
        >
          <Slider {...settings}>
            <div>
            <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg"  />
            </div>
            <div>
            <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg"  />
            </div>
            <div>
            <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg"  />
            </div>
            <div>
            <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg"  />
            </div>
            <div>
            <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg"  />
            </div>
            <div>
            <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg"  />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}