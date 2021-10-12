
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

                            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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

