import React from "react"
function About() {
  return (
    <>
        <div className="card mb-3" style={{maxWidth: '100%'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://demo8.wsas.vn/tintoc-old/upload//images/ship%20hang%20chuyen%20nghiep.png" alt="..." className="img-fluid" />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{boder:"2px solid"}}>
              <h5 className="card-title">CHÍNH SÁCH GIAO HÀNG</h5>
              <p className="card-text">
              FASHION SHOP có dịch vụ giao hàng tận nơi trên toàn quốc, áp dụng cho khách mua hàng trên website,fanpage và gọi điện thoại, không áp dụng cho khách mua trực tiếp tại cửa hàng. Đơn hàng sẽ được chuyển phát đến tận địa chỉ khách hàng cung cấp thông qua công ty vận chuyển trung gian.

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
            <img src="https://linhhandmade.com/assets/post/5b71ac781a93b-13-08-2018.39068341_434271643646069_8156772520129724416_n.png" alt="..." className="img-fluid" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">2.Phí giao hàng:</h5>
              <p className="card-text">
              Để kiểm tra thông tin hoặc tình trạng đơn hàng của quý khách, xin vui lòng inbox fanpage hoặc gọi số hotline, cung cấp tên, số điện thoại để được kiểm tra.
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