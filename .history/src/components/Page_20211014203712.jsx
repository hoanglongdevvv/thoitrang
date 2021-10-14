import React, { Component } from "react";
import Slider from "react-slick";
import './css/Page.css'
export default class House extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "1px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>  <h2 style={{marginTop:'-px'}}>NEW FASHION MODEL</h2>
        <Slider {...settings}>
          <div>
         
          <img className="chinhanh" alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8th21s009-cb252-3-thumb-.jpg" width={210}/>
          </div>
          <div>
          <img  className="chinhanh" alt="..." src="https://media.canifa.com/catalog/product/8/t/8te19w043-sw100-33.jpg" width={210}/>
          </div>
          <div>
          <img  className="chinhanh" alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8te19w002-pa093-51_thumb1_.jpg" width={210}/>
          </div>
          <div>
          <img  className="chinhanh" alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8ot20w021-sa424-1-thumb-.jpg" width={210}/>
          </div>
          <div>
          <img  className="chinhanh" alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21s005-pb320-2-thumb-.jpg" width={210}/>
          </div>
          <div>
          <img className="chinhanh"  alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21s006-pr098-2-thumb-.jpg" width={210}/>
          </div>
          <div>
          <img  className="chinhanh" alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8tw19w007-sk010-thumb_1.jpg" width={210}/>
          </div>
          <div>
          <img  className="chinhanh" alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8tw20w001-sg025-1-thumb-.jpg" width={210}/>
          </div>
        </Slider>
      </div>
    );
  }
}