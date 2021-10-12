import React, { Component ,useState} from 'react'
import { DataContext } from './Data';
import {Link} from 'react-router-dom'
import '../css/Products.scss'
const SeachCart = () => {

    static contextType = DataContext;

    render() {
        const {products} = this.context;
    const [filter, setFilter] = useState('');

    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    let dataSeach = Dataseach.cardData.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });

        
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
                                <button onClick={() => this.context.addCart(product._id)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default SeachCart

































// import React, { useState } from "react";
// import Dataseach from "./Data";
// const SeachCart = () => {

//     const [filter, setFilter] = useState('');

//     const searchText = (event) =>{
//         setFilter(event.target.value);
//     }
//     let dataSeach = Dataseach.cardData.filter(item =>{
//         return Object.keys(item).some(key =>
//             item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
//         )
//     });
//     return (
//         <section className="py-4 container">
//             <div className="row justify-content-center">

//             <div className="col-12 mb-5">
//                 <div className="mb-3 col-4 mx-auto text-center">
//                     <label className="form-lable h4">Seach</label>
//                     <input
//                     type="text"
//                     className="from-control"
//                     value={filter}
//                     onChange={searchText.bind(this)}
//                      />

                    
//                 </div>
//             </div>

//                 {
//                     dataSeach.map((item, index) => {
//                         return (
//                             <div className="col-11 col-md-16 col-lg-3 mx-0 mb-4">
//                                 <div className="card p-0 overflow-hidden h-100 shadow ">
//                                     <img alt="..." src={item.img} className="card-img-top" />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{item.title}</h5>
//                                         <p className="card-text">{item.desc}</p>

//                                     </div>

//                                 </div>

//                             </div>

                            
//                         )
//                     })
//                 }


//             </div>

//         </section>
//     )

// }
// export default SeachCart