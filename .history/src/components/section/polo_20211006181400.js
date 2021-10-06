import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { PoloContext } from '../polodata';

export class Polo extends Component {

    static contextType = PoloContext;

    render() {
        const {PoloContext} = this.context;
        return (
           
            <div id="product">
             
                {
                    PoloContext.map(product => (
                       
                        <div className="card" key={product._id}>
                            <Link to={`/product/${product._id}`}>
                              <img src={product.src} alt="" />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product._id}`} > {product.title}</Link>
                                </h3>
                                <span><b>Giá Sản Phầm: {product.price}$</b></span>
                                <p>{product.description}</p>
                                <button onClick={() => this.context.addCart(product._id)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Polo
