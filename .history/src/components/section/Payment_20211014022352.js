import React, { Component } from 'react'
import '../css/phanhoi.css'
export class Payment extends Component {
    render() {
        return (
                <form style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'500px',background:'#f5f6fa'}}>
                {/* Email input */}
                
                <div className="form-outline  mb-4">
                <label className="form-label" htmlFor="form4Example2">Email address</label>
                    <input type="email" placeholder="Nhập Gmail hoặc SĐT"/>
                </div>
                <div className="form-outline  mb-4">
                <label className="form-label" htmlFor="form4Example1">Name</label>
                    <input type="text"  />
                </div>
                {/* Message input */}
                <div className="form-outline form-blac mb-4">
                    <textarea className="dulieu form-control" id="form4Example3" rows={4} defaultValue={""} />
                    <label className="form-label" htmlFor="form4Example3">Message</label>
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form4Example4" defaultChecked />
                    <label className="form-check-label" htmlFor="form4Example4">
                        Send me a copy of this message
                    </label>
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
                 </form>
        )
    }
}

export default Payment
