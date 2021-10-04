import React from "react";
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
          <div className="carousel-item active" style={{marginTop}}>
            <img src="./Imgs/img1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Imgs/img2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Imgs/img3.png" className="d-block w-100" alt="..." />
          </div>  <div className="carousel-item">
            <img src="./Imgs/img4.png" className="d-block w-100" alt="..." />
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


// import React, {useState} from 'react'
// import './Slider.scss'
// import BtnSlider from './BtnSlider'
// import dataSlider from './dataSlider'

// export default function Slider() {

//     const [slideIndex, setSlideIndex] = useState(1)

//     const nextSlide = () => {
//         if(slideIndex !== dataSlider.length){
//             setSlideIndex(slideIndex + 1)
//         } 
//         else if (slideIndex === dataSlider.length){
//             setSlideIndex(1)
//         }
//     }

//     const prevSlide = () => {
//         if(slideIndex !== 1){
//             setSlideIndex(slideIndex - 1)
//         }
//         else if (slideIndex === 1){
//             setSlideIndex(dataSlider.length)
//         }
//     }

//     const moveDot = index => {
//         setSlideIndex(index)
//     }

//     return (
//         <div className="container-slider">
//             {dataSlider.map((obj, index) => {
//                 return (
//                     <div
//                     key={obj.id}
//                     className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//                     >
//                         <img alt=""
//                         src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.png`} 
//                         />
//                     </div>
//                 )
//             })}
//             <BtnSlider moveSlide={nextSlide} direction={"next"} />
//             <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

//             <div className="container-dots">
//                 {Array.from({length: 4}).map((item, index) => (
//                     <div 
//                     onClick={() => moveDot(index + 1)}
//                     className={slideIndex === index + 1 ? "dot active" : "dot"}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     )
// }
