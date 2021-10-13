import React from "react"
function Footer() {
  return (
    <footer className="text-center text-white" style={{backgroundColor: '#a4b0be'}}>
    {/* Grid container */}
    <div className="container pt-4">
      {/* Section: Social media */}
      <section className="mb-4" style={{boxShadow:'none',background:'#a4b0be'}}>
        {/* Facebook */}
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f" /></a>
        {/* Twitter */}
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-twitter" /></a>
        {/* Google */}
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-google" /></a>
        {/* Instagram */}
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-instagram" /></a>
        {/* Linkedin */}
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
        {/* Github */}
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
      </section>
      {/* Section: Social media */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div className="text-center text-dark p-3" style={{backgroundColor: '#c8d6e5'}}>
      © 2021 Copyright:
      <a className="text-dark" href="https://www.facebook.com/longdevelop"> FASHION SHOP</a>
    </div>
    {/* Copyright */}
  </footer>
  )
}
export default Footer