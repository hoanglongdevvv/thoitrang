
import React, { useState } from "react";
import Dataseach from "./Data";
import '../css/Products.scss'
const SeachCart = () => {

    const [filter, setFilter] = useState('');

    const searchText = (event) => {
        setFilter(event.target.value);
    }
    let dataSeach = Dataseach.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });
    return (
        <section className="py-3 container">
            <div className="row justify-content-center">

                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                        <label className="form-lable h4">Seach</label>
                        <input
                            type="text"
                            className="from-control"
                            value={filter}
                            onChange={searchText.bind(this)}
                        />


                    </div>
                </div>

                {
                    dataSeach.map((item, index) => {
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
                                <button onClick={() => this.context.addCart(product._id)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
                    })
                }

            </div>

        </section>
    )

}
export default SeachCart

