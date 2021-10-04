import React from "react";
import './Slider.scss'
function Silde() {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-mdb-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to={3} aria-label="Slide 4" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./Imgs/img1.png" className="slide d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Imgs/img2.png" className="slide d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Imgs/img3.png" className="slide d-block w-100" alt="..." />
          </div>  <div className="carousel-item">
            <img src="./Imgs/img4.png" className="slide d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
    
}
export default Silde