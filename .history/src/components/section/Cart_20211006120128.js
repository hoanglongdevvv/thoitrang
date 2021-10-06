import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom';
import Colors from './Colors';
import "../css/Details.scss"
import "../css/Cart.scss"
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export class Cart extends Component {
    
    static contextType = DataContext;

    componentDidMount(){
      this.context.getTotal();

    }

    render() {
        async function handleToken(token, addresses) {
            const response = await axios.post(
              "https://ry7v05l6on.sse.codesandbox.io/checkout",
              { token, product }
            );
            const { status } = response.data;
            console.log("Response:", response.data);
            if (status === "success") {
              toast("Success! Check email for details", { type: "success" });
            } else {
              toast("Something went wrong", { type: "error" });
            }
          }
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0 ){
           return <h2 style={{textAlign:"center", color:"white", background:"#353b48"}}>Chưa Có Sản Phẩm.</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item => (
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt="" />
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span style={{fontSize:"20px"}}>Số Tiền Phải Thanh Toán: ${item.price * item.count}</span>
                                    </div>
                                    <Colors colors={item.colors}/>
                                    <p>{item.description}</p>
                                    <p>{item.Content}</p>
                                   <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                   </div>
                                </div>
                              <div className="delete" onClick={()=> removeProduct(item._id)}  style={{backgroundColor: '#78e08f', fontSize:'15px',}}>Xóa</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${total}</h3>
                    </div>
                </>
            )
        }
     }
       
}

export default Cart
