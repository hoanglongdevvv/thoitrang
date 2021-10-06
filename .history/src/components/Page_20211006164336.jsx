import React, { Component } from "react";
import Slider from "react-slick";
import { DataContext } from '../components/Context'
import {Link} from 'react-router-dom';
export default class PauseOnHover extends Component {
  static contextType = DataContext;
  state = {
      product: []
  }

  getProduct = () => {
      if (this.props.match.params.id) {
          const res = this.context.products;
          const data = res.filter(item => {
              return item._id === this.props.match.params.id
          })
          this.setState({ product: data })
      }
  };

  componentDidMount() {
      this.getProduct()
  }
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
    const { product} = this.state;
    const { addCart} = this.context;
    return (
     
      <div>
        <h2>Pause On Hover</h2>
        <Slider {...settings}>
          <div>
          {
                    product.map(item => (
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
                    ))
                }
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