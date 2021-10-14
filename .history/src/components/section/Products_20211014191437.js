import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.scss'
export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products} = this.context;
        return (
           
            <div id="product">
             
                {
                    products.map(product => (
                       
                        <div className="card" key={product._id} style={{fontFamily:''}}>
                            <Link to={`/product/${product._id}`}>
                              <img src={product.src} alt="" />
                            </Link>
                            <div className="content">
                                <h2 >
                                    <Link to={`/product/${product._id}`} > {product.title}</Link>
                                </h2>
                                <p>⭐⭐⭐⭐⭐</p>
                                <span><b>Giá Sản Phầm: {product.price}$</b></span>
                                <p>{product.description}</p>
                                <button onClick={() => this.context.addCart(product._id)}>Mua </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Products
