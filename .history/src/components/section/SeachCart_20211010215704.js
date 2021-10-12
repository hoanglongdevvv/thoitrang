import React from "react";
import  Data  from "./Data";

const SeachCart = () => {
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">

                {
                    data.cardData.map((item, index) => {
                        return (
                            <div className="col-11 col-md-16 col-lg-3 mx-0 mb-4">
                                <div className="card p-0 overflow-hidden h-100 shadow ">
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