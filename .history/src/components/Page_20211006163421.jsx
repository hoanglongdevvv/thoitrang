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

      {
        product.map(item => (
          <Slider {...settings}>
            <div className="details" key={item._id}>
                <img src={item.src} alt="" />
                <div className="box">
                    <div className="row">
                        <h2>{item.title}</h2>
                        <span>${item.price}</span>
                    </div>
                    <Colors colors={item.colors}/>
                    <p>{item.description}</p>
                    <p>{item.Content}</p>
                    <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                        Add to cart
                    </Link>
                </div>
          
            </div>
            </Slider>
        ))
    }
    );
  }
}