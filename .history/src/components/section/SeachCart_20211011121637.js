
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
                        return (

                            <div className="col-sm-4" key={item.id}>
                                <div className="card p-0 overflow-hidden h-100 shadow ">
                                    <img alt="..." src={item.img} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.desc}</p>
                                    </div>

                                </div>
                               

                            </div>
                            

                            <div className="col-sm-4" key={item.id}>
                                <div className="card">
                                    <img alt="..." src={item.img} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.desc}</p>
                                    </div>
                                </div>
                            </div>


                        )
                    })
                }


            </div>

        </section>
    )

}
export default SeachCart

