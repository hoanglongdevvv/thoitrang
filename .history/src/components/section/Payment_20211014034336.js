import React, { Component } from 'react'
import '../css/hotro.css'
export class Payment extends Component {
    thaydoisukien(event) {
        alert('Đã Gửi Phản Hồi Thành Công !')
    }

    render() {
        return (

            <>
                <h3>Hỗ Trợ Khách Hàng</h3>
                <form
                    className="daylaform"
                    accept-charset="UTF-8"
                    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSep5Eg7f7SV4WFvd-T5PQlG-MJBP82HETRsbd3eQIC3WQx2dQ/formResponse"
                    style={{
                        display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '500px', background: '#f5f6fa', fontSize: '20px', fontWeight: 'bold', borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 0 20px #ced6e0',
                        @media only screen and (max-width: 568px) {
	
}
                    }}>
                    {/* Email input */}
                    <div className="form-outline  mb-4">
                        <label className="form-label" htmlFor="form4Example1">Họ Và Tên</label>
                        <input type="text" name="entry.589521639" text="kaipro" />

                    </div>
                    <div className="form-outline  mb-4">
                        <label className="form-label" htmlFor="form4Example2">Nhập Gmail - SĐT</label>
                        <input type="text" name="entry.15191181" />
                    </div>
                    <div className="form-outline  mb-4">
                        <label className="form-label" htmlFor="form4Example1">Nhập Địa Chỉ</label>
                        <input type="text" name="entry.872468786" />
                    </div>
                    {/* Message input */}
                    <div className="form-outline form-blac mb-4">
                        <textarea name="entry.554598849" className="dulieu form-control" id="form4Example3" rows={10} defaultValue={""} placeholder="Phản Ánh Sản Phẩm Ở Đây !" style={{ background: '#f1f2f6', boxShadow: '0 0 20px #ced6e0', color: '#38ada9', fontWeight: 'bold' }} />

                    </div>
                    {/* Submit button */}
                    <button type="submit" onClick={(event) => this.thaydoisukien(event)} className="btn btn-primary btn-block mb-4" style={{ height: '55px' }}>Send</button>
                </form>
            </>
        )
    }
}

export default Payment
