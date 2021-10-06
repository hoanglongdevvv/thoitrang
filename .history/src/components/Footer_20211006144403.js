import React from "react"
function Footer() {
  return (
    <>
    {/* Footer */}
    <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />Công Ty
                </h6>
                <p>
                CỬA HÀNG THỜI TRANG FASHION SHOP
Chúng tôi tự hào là đơn vị mang đến cho KHÁCH HÀNG phong cách thời trang trẻ trung, gu ăn mặc đơn giản, giúp KHÁCH HÀNG có thể TỰ TIN nhất trong mọi lúc, mọi nơi.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Công Nghệ
                </h6>
                <p>
                  <a href="#!" className="text-reset">JavaScript</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">React Js</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Liên Hệ
                </h6>
                <p><i className="fas fa-home me-3" /> Xuân Lộc, Đồng Nai, Việt Nam</p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  admin@gmail.com
                </p>
                <p><i className="fas fa-phone me-3" /> + 123.456789</p>

              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://www.facebook.com/longdevelop">Fashion Shop</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>

  )
}
export default Footer