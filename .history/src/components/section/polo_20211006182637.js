import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Polodata'
import '../css/Products.scss'
export class Polo extends Component {

    static contextType = DataContext;

    render() {
        const {products} = this.Polodata;
        return (
           
            <div id="product">
             
                {
                    products.map(product => (
                       
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
                                <button onClick={() => this.polodata.addCart(product._id)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Polo
