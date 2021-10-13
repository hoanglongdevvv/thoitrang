import React, { Component } from 'react'
import '../css/phanhoi.css'
export class Payment extends Component {
    
    render() {
        return (
            <form
            accept-charset="UTF-8"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSep5Eg7f7SV4WFvd-T5PQlG-MJBP82HETRsbd3eQIC3WQx2dQ/formResponse"  method="post"
             style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '500px', background: '#f5f6fa', fontSize: '25px', fontWeight: 'bold', borderRadius:'10px',    border: '1px solid #ddd', boxShadow:'0 0 20px #ced6e0' }}>
                {/* Email input */}
                <div className="form-outline  mb-4">
                    <label className="form-label" htmlFor="form4Example1">Họ Và Tên</label>
                    <input type="text"  name="entry.589521639"  />

                </div>
                <div className="form-outline  mb-4">
                    <label className="form-label" htmlFor="form4Example2">Nhập Gmail - SĐT</label>
                    <input type="text"  name="entry.15191181" />
                </div>
                <div className="form-outline  mb-4">
                    <label className="form-label" htmlFor="form4Example1">Nhập Địa Chỉ</label>
                    <input type="text"  name="entry.872468786" />
                </div>
                {/* Message input */}
                <div className="form-outline form-blac mb-4">
                    <textarea name="entry.554598849" className="dulieu form-control" id="form4Example3" rows={10} defaultValue={""} placeholder="Phản Ánh Sản Phẩm Ở Đây !" style={{ background: '#dcdde1' }} />
                   
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form4Example4" defaultChecked />
                    <label className="form-check-label" htmlFor="form4Example4">
                        Send me a copy of this message
                    </label>
                </div>
                {/* Submit button */}
                <button  type="submit" className="btn btn-primary btn-block mb-4" style={{height:'55px'}}>Send</button>
            </form>
        )
    }
}

export default Payment
