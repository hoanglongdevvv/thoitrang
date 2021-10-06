import React, { Component } from "react";
import Slider from "react-slick";
import { DataContext } from '../components/Context'
import {Link} from 'react-router-dom';
export default class PauseOnHover extends Component {
  static contextType = DataContext;
    state = {
        product: []
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
<div></div>
     
</>
    );
  }
}