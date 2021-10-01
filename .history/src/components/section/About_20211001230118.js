import React from "react"
function About() {
  return (
    <>
        <div className="card mb-3" style={{maxWidth: '100%'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="..." className="img-fluid" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">CHÍNH SÁCH GIAO HÀNG</h5>
              <p className="card-text">
              FASHION SHOP có dịch vụ giao hàng tận nơi trên toàn quốc, áp dụng cho khách mua hàng trên website, fanpage và gọi điện thoại, không áp dụng cho khách mua trực tiếp tại cửa hàng.

Đơn hàng sẽ được chuyển phát đến tận địa chỉ khách hàng cung cấp thông qua công ty vận chuyển trung gian.

              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{maxWidth: '100%'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="..." className="img-fluid" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">2.Kiểm  Phí giao hàng:</h5>
              <p className="card-text">
              Phí ship cố định là 30,000đ áp dụng cho mọi khu vực.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About