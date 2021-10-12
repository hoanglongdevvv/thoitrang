
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
                            <div className="col">
        <div className="card">
          <img src="../img/" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
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

